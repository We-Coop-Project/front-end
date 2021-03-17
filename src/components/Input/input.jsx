import React from "react";
import inputImg from "../../assets/img/input.png";
import {
  ContentContainer,
  ImgContainer,
  Title,
  InputTab,
  SubmitBtn,
} from "../UI/index";

const Signin = () => {
  return (
    <div id="input" className="Home">
      <ImgContainer>
        <img className="Img" src={inputImg} alt="contact" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Input" />
        <InputTab id="company" type="text" placeholder="Company Name" />
        <InputTab id="days" type="number" placeholder="Days of your worked" />
        <InputTab
          id="hours"
          type="number"
          step="0.25"
          placeholder="Hours of your worked"
        />
        <SubmitBtn />
      </ContentContainer>
    </div>
  );
};

export default Signin;
