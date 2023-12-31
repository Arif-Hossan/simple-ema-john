import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

// get the auth from firebase
const auth = getAuth(app);
// creating context
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    // const user = {displayName :"Arif"}
    const [user, setUser] = useState(null);
    const [loading,setLoading] =useState(true);
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    // observer user auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            // set loading false when we get the user
            setLoading(false);
        });
        // stop observing while unmounting
        return ()=> {
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;