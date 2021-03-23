import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import signupImg from "../../assets/img/signup.png";
import { ContentContainer, ImgContainer, Title } from "../UI/index";
import AuthContext from "../../context/Auth-context";
import User from "../User/User";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "we-coop.firebaseapp.com",
});

const Signin = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [userName, setUserName] = useContext(UserContext);
  const authContext = useContext(AuthContext);

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      console.log(user);
      // authContext.isAuth = !!user;
    });
  });

  return (
    <div id="signup" className="Home">
      <ImgContainer>
        <img className="Illust" src={signupImg} alt="signup" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign In" />

        {isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          // <User />
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </ContentContainer>
    </div>
  );
};

export default Signin;
