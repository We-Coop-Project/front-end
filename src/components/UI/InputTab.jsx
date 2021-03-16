import React from "react";

const Input = ({ id, type, step, placeholder }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        step={step}
        placeholder={placeholder}
        className="Input"
      />
    </div>
  );
};

export default Input;
