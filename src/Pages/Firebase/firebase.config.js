import firebaseConfig from "./firebase.init"
import { initializeApp } from "firebase/app";

const initializeFirebaseApp =()=>{
    return initializeApp(firebaseConfig)
}
export default initializeFirebaseApp