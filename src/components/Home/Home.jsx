import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import FontCheck from "./FontCheck";
import home from "../../assets/img/home.jpg";

const Home = () => {
  return (
    <div className="Home">
      <ImgContainer>
        <img className="Img" src={home} alt="home" />
      </ImgContainer>
      <ContentContainer>
        <FontCheck />
      </ContentContainer>
    </div>
  );
};

export default Home;
