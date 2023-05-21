

import { createContext, useState } from "react";

import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";


const auth = getAuth(app)
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null) 
  const [loading, setLoading] = useState(true);
  
   const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider(); 

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })

  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  } 


  //observer auth state change
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
     
      setLoading(false);
    })
    return () => {
      return unsubscribe();
    }
  },[])


  const authInfo = {

    user,
    createUser,
    signIn,
    loading,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    updateUser
    
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;