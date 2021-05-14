import React, { useEffect, useState } from "react";
import firebaseConfig from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            console.log("user: ", user)
        })
    }, [])
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}