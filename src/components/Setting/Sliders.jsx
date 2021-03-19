import React from "react";
import Slider from "react-slick";
import { Hint } from "../UI/Hint";
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
      <Slider {...settings} className="w-80 text-center flex">
        <div className="focus:outline-none">
          <div className="flex">
            <InputTab
              id="start"
              type="text"
              placeholder="Co-op Start Date"
              onFocus={onFocusHandle}
              onBlur={onBlurHandle}
            />
            <Hint hint="Please enter your co-op start day on visa" />
          </div>
          <InputTab
            id="end"
            type="text"
            placeholder="Co-op End Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
          <InputTab id="duration" type="number" placeholder="Co-op Hours" />
        </div>
        <div>
          <InputTab id="company" type="text" placeholder="Company name" />
          <InputTab id="isCoop" type="text" placeholder="Co-op Job?" />
        </div>
        <div>
          <InputTab
            id="start"
            type="text"
            placeholder="Co-op Start Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
          <InputTab
            id="end"
            type="text"
            placeholder="Co-op End Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
