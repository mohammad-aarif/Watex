import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {
    const firebaseContext = useFirebase()
    return (
        <AuthProvider.Provider value={firebaseContext}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;