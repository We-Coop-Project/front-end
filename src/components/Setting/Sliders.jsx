import React, { useCallback } from "react";
import Slider from "react-slick";
import { InputTab, NextArrow, BackArrow } from "../UI/index";
import ReactTooltip from "react-tooltip";

const Sliders = (props) => {
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
    <div className="relative z-10">
      <Slider {...settings} className="w-80 text-center flex z-10">
        <div className="focus:outline-none z-10">
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
            oninput="this.value = Math.abs(this.value)"
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
        <div>
          <InputTab
            id="company"
            type="text"
            placeholder="#1 Company name"
            onChange={props.onChangeCompany}
            disabled={props.disabled}
          />
          <select
            className="Input"
            style={{ textAlignLast: "center" }}
            id="isCoop"
            onChange={props.onChangeIsCoop}
            disabled={props.disabled}
          >
            <option value="" disabled selected>
              Co-op Job?
            </option>
            <option value="CO">Yes</option>
            <option value="OT">No</option>
          </select>
        </div>
        <div>
          <InputTab
            id="company"
            type="text"
            placeholder="#2 Company name"
            onChange={props.onChangeCompany}
            disabled={props.disabled}
          />
          <select
            className="Input"
            style={{ textAlignLast: "center" }}
            id="isCoop"
            onChange={props.onChangeIsCoop}
            disabled={props.disabled}
          >
            <option value="" disabled selected>
              Co-op Job?
            </option>
            <option value="CO">Yes</option>
            <option value="OT">No</option>
          </select>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
