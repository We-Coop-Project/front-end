import React from "react";

const Input = ({ id, placeholder, onChange }) => {
  return (
    <div>
      <textarea
        name="message"
        placeholder={placeholder}
        id={id}
        cols="30"
        rows="3"
        className="Input"
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Input;
