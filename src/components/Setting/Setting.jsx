import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import settingImg from "../../assets/img/setting.png";
import Title from "../UI/Title";
import SubmitBtn from "../UI/SubmitBtn";
import NextBtn from "../UI/NextBtn";
import Sliders from "./Sliders";

const Signin = () => {
  return (
    <div id="setting" className="Home">
      <ImgContainer>
        <img className="Img" src={settingImg} alt="setting" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Setting" />
        <Sliders />
        <div className="flex justify-around w-72">
          <SubmitBtn />
          <NextBtn />
        </div>
      </ContentContainer>
    </div>
  );
};

export default Signin;
