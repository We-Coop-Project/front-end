import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import contactImg from "../../assets/img/contact.png";
import Title from "../UI/Title";
import InputTab from "../UI/InputTab";
import TextArea from "../UI/TextArea";
import SubmitBtn from "../UI/SubmitBtn";

const Signin = () => {
  return (
    <div id="contact" className="Home">
      <ImgContainer>
        <img className="Img" src={contactImg} alt="contact" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Contact" />
        <InputTab id="name" type="text" placeholder="Your Name" />
        <InputTab id="email" type="email" placeholder="Your Email" />
        <TextArea id="message" placeholder="Message" />
        <SubmitBtn />
      </ContentContainer>
    </div>
  );
};

export default Signin;
