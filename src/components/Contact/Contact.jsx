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
} from "../UI/index";
import swal from "sweetalert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const isBlank = ValidateRequiredInput(name, email, message);
    const isValidEmail = ValidateEmailFormat(email);

    if (isBlank) {
      swal({
        title: "Oops...",
        text: "Please fill out all the boxes.",
      });
      return false;
    } else if (!isValidEmail) {
      swal({
        title: "Oops...",
        text: "Please fill valid email address.",
      });
      return false;
    } else {
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
        swal({
          title: "Thank you!",
          text: "We will get back to you as soon as possible.",
          buttons: false,
        });
        setName("");
        setEmail("");
        setMessage("");
      });
    }
  };

  return (
    <div id="contact" className="Home">
      <ImgContainer>
        <img className="Illust" src={contactImg} alt="contact" />
      </ImgContainer>
      <ContentContainer>
        <Title title="Contact" />
        <form onSubmit={submitForm}>
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
        </form>
        <SubmitBtn onClick={submitForm} button="Submit" />
      </ContentContainer>
    </div>
  );
};

export default Contact;
