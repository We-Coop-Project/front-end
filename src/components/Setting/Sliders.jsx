import React, { useCallback, useEffect } from "react";
import Slider from "react-slick";
import { InputTab, NextArrow, BackArrow } from "../UI/index";
import ReactTooltip from "react-tooltip";
import { useHamOpen } from "../../context/HamOpen-context";

const Sliders = (props) => {
  const { menuOpen } = useHamOpen();

  const settings = {
    nextArrow: <NextArrow type="next" />,
    prevArrow: <BackArrow type="prev" />,
    infinite: true,
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

  useEffect(() => {
    const slider = document.querySelector("#slider");
    if (menuOpen) {
      slider.style.zIndex = -1;
    } else {
      slider.style.zIndex = 0;
    }
  }, [menuOpen]);

  return (
    <div id="slider" className="relative">
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
            onChange={props.onChangeCoopStartDate}
            value={props.coopStartDate}
          />
          <ReactTooltip id="for-end-date" efect="solid" place="bottom">
            When will you finish your co-op job?
          </ReactTooltip>
          <InputTab
            id="end-date"
            type="text"
            min="0"
            placeholder="Co-op End Date"
            // onInput="this.value = Math.abs(this.value)"
            onFocus={onFocusHandle}
            onBlur={onBlurHandle}
            data-tip
            dataFor="for-end-date"
            dataEvent="focus"
            dataEventOff="blur"
            autoComplete="off"
            onChange={props.onChangeCoopEndDate}
            value={props.coopEndDate}
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
            onChange={props.onChangeCoopHours}
            value={props.coopHours}
          />
        </div>
        <div className="focus:outline-none z-10">
          <InputTab
            id="company1"
            type="text"
            placeholder="Company name"
            onChange={props.onChangeCompany}
            disabled={props.disabled}
          />
          {/* <label className="text-sm">Co-op Job?</label> */}
          <select
            className="Input"
            // value="isCoop"
            style={{ textAlignLast: "center" }}
            id="isCoop1"
            onChange={props.onChangeIsCoop}
            disabled={props.disabled}
          >
            <option value="">Co-op Job?</option>
            <option value="CO">Yes</option>
            <option value="OT">No</option>
          </select>
        </div>
        {/* <div className="focus:outline-none z-10">
          <InputTab
            id="company2"
            type="text"
            placeholder="#2 Company name"
            onChange={props.onChangeCompany}
            disabled={props.disabled}
          />
          <select
            className="Input2"
            style={{ textAlignLast: "center" }}
            id="isCoop2"
            onChange={props.onChangeIsCoop}
            disabled={props.disabled}
          >
            <option value="" disabled selected>
              Co-op Job?
            </option>
            <option value="CO">Yes</option>
            <option value="OT">No</option>
          </select>
        </div>  */}
      </Slider>
    </div>
  );
};

export default Sliders;
