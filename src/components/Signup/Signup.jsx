import React from "react";
import signupImg from "../../assets/img/signup.png";
import { ContentContainer, ImgContainer, Title, Button } from "../UI/index";

const Signin = () => {
  return (
    <div id="signup" className="Home">
      <ImgContainer>
        <img className="Illust" src={signupImg} alt="signup" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign Up" />
        <Button id="upGoogle" button="Sign Up with Google" />
        <Button id="upFacebook" button="Sign Up with Facebook" />
      </ContentContainer>
    </div>
  );
};

export default Signin;
