import React from "react";
import signinImg from "../../assets/img/login.png";
import { Hint } from "../UI/Hint";
import { ContentContainer, ImgContainer, Title, Button } from "../UI/index";

const Signin = () => {
  return (
    <div id="signin" className="Home">
      <ImgContainer>
        <img className="Illust" src={signinImg} alt="signin" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Sign In" />
        <Button id="inGoogle" button="Sign In with Google" />
        <Button id="inFacebook" button="Sign In with Facebook" />
        <Hint />
      </ContentContainer>
    </div>
  );
};

export default Signin;
