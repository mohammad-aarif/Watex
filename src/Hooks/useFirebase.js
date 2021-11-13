import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebaseApp from "../Pages/Firebase/firebase.config";
// import { useHistory, useLocation } from "react-router";


initializeFirebaseApp()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();


    const googleProvider = new GoogleAuthProvider();



    // Google Sign In 
    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setError('');
            const user = result.user;
            setUser(user)
            saveUser(user.displayName , user.email, 'PUT')
            const uri = location?.state?.from || '/';
            history.replace(uri)
            // console.log(uri)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        })
        .finally(() => {
          setIsLoading(false)

        });
    }




    // Create User Using Email 
    const signUpWithEmail = (email, password, name, location, history) => {
      setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password, name)
      .then((userCredential) => {
        setError('');
        const user = {displayName: name, email: email, photoURL: "https://i.ibb.co/HDFDtBj/images.png"};
        setUser(user)
        saveUser(name, email, 'POST')
        updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://i.ibb.co/HDFDtBj/images.png"
        }).then(() => {

        }).catch((error) => {

        });
        // console.log(uri)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
      }).finally(() => setIsLoading(false));
    }




    // Log in using Email 
    const signInWithEmail = (email, password, location, history) => {
      setIsLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setError('');
          const user = userCredential.user;
          setUser(user)
          const uri = location?.state?.from || '/';
          history.replace(uri)
          // console.log(uri)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        }).finally(() => setIsLoading(false));
    }


    // auth change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
        return () => unsubscribe;
    },[auth])

    // User Data Send To database 
    const saveUser = (name, email, method) => {
      const data = {
        displayName : name,
        email : email,
        created: new Date()
      }
      fetch('http://localhost:3002/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then()
    }

    useEffect(() =>{
      fetch(`http://localhost:3002/users/${user.email}`)
      .then(res => res.json())
      .then(data => setIsAdmin(data.admin))
    }, [user.email])

    // Log Out 
    const logOut = () => {
      setIsLoading(true)
        signOut(auth).then(() => {           
          }).catch((error) => {
            setError(error.message)
          }).finally(() => setIsLoading(false));
    }
    
    return{
        user,
        isAdmin,
        setUser,
        error,
        setError,
        isLoading,
        setIsLoading,
        signUpWithEmail,
        signInWithEmail,
        googleSignIn,
        logOut

    }
}
export default useFirebase;