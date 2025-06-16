import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
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
 const  createUser =(email,password)=>{
  setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password )
 }
  useEffect(() => {
   const unSubscribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false)
   })
 
   return () => {
     unSubscribe()
   }
 }, [])
 
    const userInfo={
        loading,
        user,
        createUser,
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
