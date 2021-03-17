import React from "react";
import settingImg from "../../assets/img/setting.png";
import Sliders from "./Sliders";
import { ContentContainer, ImgContainer, Title, SubmitBtn } from "../UI/index";

const Signin = () => {
  return (
    <div id="setting" className="Home">
      <ImgContainer>
        <img className="Img" src={settingImg} alt="setting" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Setting" />
        <Sliders />
        {/* <div className="mr-40"> */}
        <SubmitBtn />
        {/* </div> */}
      </ContentContainer>
    </div>
  );
};

export default Signin;
