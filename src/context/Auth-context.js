import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "../firebase/firebase";

const AuthContext = createContext();

export const Consumer = AuthContext.Consumer;

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => console.log("curr: ", currentUser), [currentUser]);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Login Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    currentUser,
    loading,
    uiConfig,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
