import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import signinImg from "../../assets/img/login.png";
import Title from "../UI/Title";
import Button from "../UI/Button";

const Signin = () => {
  return (
    <div id="signin" className="Home">
      <ImgContainer>
        <img className="Img" src={signinImg} alt="signin" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign In" />
        <Button id="inGoogle" button="Sign In with Google" />
        <Button id="inFacebook" button="Sign In with Facebook" />
      </ContentContainer>
    </div>
  );
};

export default Signin;
