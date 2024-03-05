import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

 export const AuthContext = createContext()
 const auth = getAuth(app)
 
 
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
   const sub = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return sub();
        }
    },[])
   

    const createUser = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass);
      
    }
    const login = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

  const authInfo={
         user,
         loading,
         createUser,
         login,
         logOut
  }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;