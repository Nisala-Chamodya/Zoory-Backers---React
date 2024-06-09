import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create an Account\
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //and create an account

  {
    /*start signup*/
  }
  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider);
  };
  {
    /*end sign up*/
  }

  {
    /*start login using email and password */
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  {
    /*end login using email and password */
  }
  {
    /*start log out functionality */
  }
  const logOut = () => {
    signOut(auth);
  };
  {
    /* end logout functionality */
  }
  {
    /*start update profile */
  }
  const updateuserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  {
    /*end update profile */
  }

  {
    /*start checked sign in user */
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  {
    /* end checked signin user*/
  }

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateuserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
