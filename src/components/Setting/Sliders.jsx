import React from "react";
import Slider from "react-slick";
import { InputTab, NextArrow, BackArrow } from "../UI/index";

const Sliders = () => {
  const settings = {
    nextArrow: <NextArrow type="next" />,
    prevArrow: <BackArrow type="prev" />,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onFocusHandle = (e) => {
    e.preventDefault();
    e.target.type = "date";
  };

  const onBlurHandle = (e) => {
    e.preventDefault();
    e.target.type = "text";
  };

  return (
    <div>
      <Slider {...settings} className="w-80 text-center">
        <div>
          <InputTab
            id="start"
            type="text"
            placeholder="Coop Start Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
          <InputTab
            id="end"
            type="text"
            placeholder="Coop End Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
          <InputTab
            id="duration"
            type="number"
            step="3"
            placeholder="Co-op duration"
          />
        </div>
        <div>
          <InputTab id="company" type="text" placeholder="Company name" />
          <InputTab id="isCoop" type="text" placeholder="Co-op job?" />
        </div>
        <div>
          <InputTab
            id="start"
            type="text"
            placeholder="Coop Start Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
          <InputTab
            id="end"
            type="text"
            placeholder="Coop End Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
