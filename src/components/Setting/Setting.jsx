import React from "react";
import settingImg from "../../assets/img/setting.png";
import Sliders from "./Sliders";
import { ContentContainer, ImgContainer, Title, SubmitBtn } from "../UI/index";

const Signin = () => {
  return (
    <div id="setting" className="Home">
      <ImgContainer>
        <img className="Illust" src={settingImg} alt="setting" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Setting" />
        <Sliders />
        <SubmitBtn />
      </ContentContainer>
    </div>
  );
};

export default Signin;
