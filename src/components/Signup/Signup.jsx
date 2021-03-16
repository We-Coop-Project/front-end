import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import signupImg from "../../assets/img/signup.png";
import Title from "../UI/Title";
import Button from "../UI/Button";

const Signin = () => {
  return (
    <div id="signup" className="Home">
      <ImgContainer>
        <img className="Img" src={signupImg} alt="signup" />
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
