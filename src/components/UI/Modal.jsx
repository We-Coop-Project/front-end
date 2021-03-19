import React from "react";

const Modal = (props) => {
  return (
    <div className="relative bg-white w-3/5 h-1/5 rounded-lg text-primary">
      <div className="absolute inset-0 m-auto">
        <h3>Modal</h3>
        <button className="OkBtn">OK</button>
      </div>
    </div>
  );
};

export default Modal;
