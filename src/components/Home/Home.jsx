import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import FontCheck from "./FontCheck";
<<<<<<< HEAD
import home from "../../assets/img/home.jpg";
=======
import HomeImg from "../../assets/img/home.jpg";
>>>>>>> develop

const Home = () => {
  return (
    <div className="Home">
      <ImgContainer>
<<<<<<< HEAD
        <img className="Img" src={home} alt="top" />
=======
        <img className="Img" src={HomeImg} alt="top" />
>>>>>>> develop
      </ImgContainer>
      <ContentContainer>
        <FontCheck />
      </ContentContainer>
    </div>
  );
};

export default Home;
