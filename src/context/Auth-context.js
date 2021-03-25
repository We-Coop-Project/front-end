import React, { useState, useEffect, createContext, useContext } from "react";
import firebase from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
          sessionStorage.setItem("user", user.uid);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        console.log("Logout Successfully");
        sessionStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    currentUser,
    uiConfig,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
