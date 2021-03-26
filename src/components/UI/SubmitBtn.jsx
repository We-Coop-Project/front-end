import React from "react";

const SubmitBtn = ({ onClick, button }) => {
  return (
    <div>
      <button className="SubmitBtn" onClick={onClick}>
        {button}
      </button>
    </div>
  );
};

export default SubmitBtn;
