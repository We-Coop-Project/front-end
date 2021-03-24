import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import signupImg from "../../assets/img/signup.png";
import { ContentContainer, ImgContainer, Title } from "../UI/index";
import { useAuth } from "../../context/Auth-context";

const Signin = () => {
  const { currentUser, uiConfig, logout } = useAuth();
  const history = useHistory();

  return (
    <div id="signup" className="Home">
      <ImgContainer>
        <img className="Illust" src={signupImg} alt="signup" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign In" />

        {currentUser ? (
          //   <span>
          //     <div>Signed In!</div>
          //     <button onClick={logout}>Sign out!</button>
          //     <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          //     <img alt="profile pic" src={firebase.auth().currentUser.photoURL} />
          //   </span>
          history.push("/user")
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
            className="z-10"
          />
        )}
      </ContentContainer>
    </div>
  );
};

export default Signin;
