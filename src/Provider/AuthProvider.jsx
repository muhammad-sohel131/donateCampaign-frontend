import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firbase.config";
import { onAuthStateChanged, signOut} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    
   
    const logOut = () => {
        return signOut(auth)
    }
   
    const authInfo = {
        user,
        setUser,
        isDarkMode,
        setIsDarkMode,
        logOut,
        loading,
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