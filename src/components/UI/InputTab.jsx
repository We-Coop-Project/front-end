import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        id={props.id}
        type={props.type}
        step={props.step}
        placeholder={props.placeholder}
        className="Input"
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
