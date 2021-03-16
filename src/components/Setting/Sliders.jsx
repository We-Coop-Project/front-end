import React from "react";
import Slider from "react-slick";
import InputTab from "../UI/InputTab";

const Sliders = () => {
  let settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="w-80 text-center">
        <div>
          <InputTab id="start" type="date" placeholder="Co-op start date" />
          <InputTab id="end" type="date" placeholder="Co-op end date" />
        </div>
        <div>
          <InputTab id="start" type="date" placeholder="Co-op start date" />
          <InputTab id="end" type="date" placeholder="Co-op end date" />
        </div>
        <div>
          <InputTab id="start" type="date" placeholder="Co-op start date" />
          <InputTab id="end" type="date" placeholder="Co-op end date" />
        </div>
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default Sliders;
