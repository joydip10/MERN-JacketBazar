import React, { createContext } from 'react';
import useFirebase from './../../Hooks/useFirebase';
export const context=createContext('');
const AuthProvider = ({children}) => {
    const allContext=useFirebase();
    return (
        <context.Provider value={allContext}>
            {children}
        </context.Provider>
    );
};

export default AuthProvider;