import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';

// get the auth from firebase
const auth = getAuth(app);
// creating context
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // const user = {displayName :"Arif"}
    const [user, setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password);
    }
    const authInfo = {
        user,
        createUser,
        signIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;