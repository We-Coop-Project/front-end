import React, { useCallback } from "react";
import Slider from "react-slick";
import { InputTab, NextArrow, BackArrow } from "../UI/index";
import ReactTooltip from "react-tooltip";

const Sliders = () => {
  const settings = {
    nextArrow: <NextArrow type="next" />,
    prevArrow: <BackArrow type="prev" />,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onFocusHandle = useCallback((e) => {
    e.preventDefault();
    e.target.type = "date";
  }, []);

  const onBlurHandle = useCallback((e) => {
    e.preventDefault();
    e.target.type = "text";
  }, []);

  return (
    <div>
      <Slider {...settings} className="w-80 text-center flex">
        <div className="focus:outline-none">
          <ReactTooltip id="for-start-date" efect="solid" place="bottom">
            When did you start your co-op job?
          </ReactTooltip>
          <InputTab
            id="start-date"
            type="text"
            placeholder="Co-op Start Date"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
            data-tip
            dataFor="for-start-date"
            dataEvent="focus"
            dataEventOff="blur"
            autoComplete="off"
          />

          <ReactTooltip id="for-end-date" efect="solid" place="bottom">
            When will you finish your co-op job?
          </ReactTooltip>
          <InputTab
            id="end-date"
            type="text"
            min="0"
            placeholder="Co-op End Date"
            oninput="this.value = Math.abs(this.value)"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
            data-tip
            dataFor="for-end-date"
            dataEvent="focus"
            dataEventOff="blur"
            autoComplete="off"
          />

          <ReactTooltip id="for-coop-hours" efect="solid" place="bottom">
            How many hours do you need to work as a co-op?
          </ReactTooltip>
          <InputTab
            id="duration"
            type="number"
            placeholder="Co-op Hours"
            data-tip
            dataFor="for-coop-hours"
            dataEvent="focus"
            dataEventOff="blur"
            autoComplete="off"
          />
        </div>
        <div>
          <InputTab id="company" type="text" placeholder="Company name" />
          <InputTab id="isCoop" type="text" placeholder="Co-op Job?" />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;