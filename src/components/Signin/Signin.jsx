import React from "react";
import signinImg from "../../assets/img/login.png";
import { ContentContainer, ImgContainer, Title, Button } from "../UI/index";

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
