import React from "react";
import ContentContainer from "../UI/ContentContainer";
import ImgContainer from "../UI/ImgContainer";
import FontCheck from "./FontCheck";

const Home = () => {
  return (
    <div className="Home">
      <ImgContainer>
        <img
          className="Top"
          src={`${process.env.PUBLIC_URL}/img/top.jpg`}
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
