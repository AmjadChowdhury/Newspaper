import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('User found',currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;