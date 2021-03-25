import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import signupImg from "../../assets/img/signup.png";
import { ContentContainer, ImgContainer, Title } from "../UI/index";
import { useAuth } from "../../context/Auth-context";
import { useHamOpen } from "../../context/HamOpen-context";

const Signin = () => {
  const { currentUser, uiConfig } = useAuth();
  const { menuOpen } = useHamOpen();

  const history = useHistory();

  useEffect(() => {
    const slider = document.querySelector("#signup");
    if (menuOpen) {
      slider.style.zIndex = -1;
    } else {
      slider.style.zIndex = 0;
    }
  }, [menuOpen]);

  return (
    <div id="signup" className="Home">
      <ImgContainer>
        <img className="Illust" src={signupImg} alt="signup" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign In" />

        {currentUser ? (
          history.push("/user")
        ) : (
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
