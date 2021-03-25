// import React, { useCallback } from "react";

// import ReactTooltip from "react-tooltip";
// import { InputTab } from "../UI/index";
// const SettingObj = () => {
//   const onFocusHandle = useCallback((e) => {
//     e.preventDefault();
//     e.target.type = "date";
//   }, []);

//   const onBlurHandle = useCallback((e) => {
//     e.preventDefault();
//     e.target.type = "text";
//   }, []);

//   const sliders = [
//     <div className="focus:outline-none z-10">
//       <ReactTooltip id="for-start-date" efect="solid" place="bottom">
//         When did you start your co-op job?
//       </ReactTooltip>
//       <InputTab
//         id="start-date"
//         type="text"
//         placeholder="Co-op Start Date"
//         onFocus={onFocusHandle}
//         onBlur={onBlurHandle}
//         data-tip
//         dataFor="for-start-date"
//         dataEvent="focus"
//         dataEventOff="blur"
//         autoComplete="off"
//       />

//       <ReactTooltip id="for-end-date" efect="solid" place="bottom">
//         When will you finish your co-op job?
//       </ReactTooltip>
//       <InputTab
//         id="end-date"
//         type="text"
//         min="0"
//         placeholder="Co-op End Date"
//         onInput="this.value = Math.abs(this.value)"
//         onFocus={onFocusHandle}
//         onBlur={onBlurHandle}
//         data-tip
//         dataFor="for-end-date"
//         dataEvent="focus"
//         dataEventOff="blur"
//         autoComplete="off"
//       />

//       <ReactTooltip id="for-coop-hours" efect="solid" place="bottom">
//         How many hours do you need to work as a co-op?
//       </ReactTooltip>
//       <InputTab
//         id="duration"
//         type="number"
//         placeholder="Co-op Hours"
//         data-tip
//         dataFor="for-coop-hours"
//         dataEvent="focus"
//         dataEventOff="blur"
//         autoComplete="off"
//       />
//     </div>,
//     <div className="focus:outline-none z-10">
//       <InputTab id="company1" type="text" placeholder="#1 Company name" />
//       <select
//         className="Input"
//         style={{ textAlignLast: "center" }}
//         id="isCoop1"
//       >
//         <option value="" disabled selected>
//           Co-op Job?
//         </option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//     </div>,
//     <div className="focus:outline-none z-10">
//       <InputTab id="company2" type="text" placeholder="#2 Company name" />
//       <select
//         className="Input"
//         style={{ textAlignLast: "center" }}
//         id="isCoop2"
//       >
//         <option value="" disabled selected>
//           Co-op Job?
//         </option>
//         <option value="yes">Yes</option>
//         <option value="no">No</option>
//       </select>
//     </div>,
//   ];

//   const settingList = sliders.map((el, index) => {
//     return <div key={index}>{el}</div>;
//   });

//   return { settingList };
// };

// export default SettingObj;
