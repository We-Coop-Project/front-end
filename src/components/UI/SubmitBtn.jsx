import React from "react";

const SubmitBtn = ({ onClick }) => {
  return (
    <div>
      <button className="SubmitBtn" onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
