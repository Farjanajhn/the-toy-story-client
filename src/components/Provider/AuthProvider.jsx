

import { createContext } from "react";

import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app)

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
/*   const [user, setUser] = useState(null) */
  
  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const createUser=(email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth)
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  }


  const authInfo = {

    createUser,
    signIn,
    logOut,
    signInWithGoogle,
    signInWithGithub
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;