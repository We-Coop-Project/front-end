import React from "react";

const Input = ({ id, placeholder }) => {
  return (
    <div>
      <textarea
        name="message"
        placeholder={placeholder}
        id={id}
        cols="30"
        rows="5"
        className="Input"
      ></textarea>
    </div>
  );
};

export default Input;
