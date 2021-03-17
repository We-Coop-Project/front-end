import React, { useState } from "react";
import contactImg from "../../assets/img/contact.png";
import { ValidateEmailFormat, ValidateRequiredInput } from "./Validater";
import {
  ContentContainer,
  ImgContainer,
  Title,
  InputTab,
  TextArea,
  SubmitBtn,
  Modal,
} from "../UI/index";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    const isBlank = ValidateRequiredInput(name, email, message);
    const isValidEmail = ValidateEmailFormat(email);

    if (isBlank) {
      // console.log(isBlank);
      alert("Please fill out all the boxes.");
      return false;
    } else if (!isValidEmail) {
      alert("Invalid Email");
      return false;
    } else {
      <Modal boolean="true" content="Thank you!" />;
      const payload = {
        text:
          "You have a message from we co-op app.\n" +
          "Name: " +
          name +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Message: \n" +
          message,
      };
      const url = process.env.REACT_APP_SLACK;

      fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("sent!");
      });
    }
  };

  return (
    <div id="contact" className="Home">
      <ImgContainer>
        <img className="Img" src={contactImg} alt="contact" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Contact" />
        <InputTab
          id="name"
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputTab
          id="email"
          type="email"
          placeholder="Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextArea
          id="message"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <SubmitBtn onClick={submitForm} />
      </ContentContainer>
    </div>
  );
};

export default Contact;
