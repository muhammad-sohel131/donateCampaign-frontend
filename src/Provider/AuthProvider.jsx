import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firbase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }
    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn,
        loading,
        updateUserProfile,
        resetPassword,
        signInWithGoogle
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubcribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}