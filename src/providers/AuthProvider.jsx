import React, { createContext } from 'react';

// creating context
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = {displayName :"Arif"}
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;