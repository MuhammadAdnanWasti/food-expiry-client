import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase.init'
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
      const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

 const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}
const googleSignIn =() => { 
  setLoading(true)
return signInWithPopup(auth, googleProvider)
 }
    const userInfo={
        loading,
     googleSignIn,
     signIn
    }
  return (
   <AuthContext value={userInfo}>
    {children}
   </AuthContext>
  )
}

export default AuthProvider
