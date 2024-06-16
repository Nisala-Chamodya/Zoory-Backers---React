import React, { useEffect, useState, createContext } from "react";
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
import axios from "axios";

// Initialize Firebase authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create an Account
  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Sign up with Google
  const signUpWithGmail = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Login with email and password
  const login = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return userCredential;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Log out
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Update user profile
  const updateUserProfile = async (name, photoURL) => {
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // Check signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axios
          .post("http://localhost:6001/jwt", userInfo)
          .then((response) => {
            if (response.data.token) {
              localStorage.setItem("access-token", response.data.token);
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Auth context information
  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    updateUserProfile,
    loading,
  };

  // Provide AuthContext to children components
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
