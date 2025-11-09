import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () =>{
    return signOut(auth)
  }


//   ok
  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
