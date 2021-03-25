import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import HomeText from "./HomeText";
import HomeImg from "../../assets/img/home.jpg";


const Home = () => {
  return (
    <div className="Home">
      <ImgContainer>
        <img className="Img" src={HomeImg} alt="top" />
      </ImgContainer>
      <ContentContainer>
        <HomeText />
      </ContentContainer>
    </div>
  );
};

export default Home;
