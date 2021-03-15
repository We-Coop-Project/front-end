import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import FontCheck from "./FontCheck";

const Home = () => {
  return (
    <div className="Home">
      <ImgContainer>
        <img
          className="Img"
          src={`${process.env.PUBLIC_URL}/img/home.jpg`}
          alt="top"
        />
      </ImgContainer>
      <ContentContainer>
        <FontCheck />
      </ContentContainer>
    </div>
  );
};

export default Home;
