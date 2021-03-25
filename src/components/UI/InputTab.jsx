import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        className="Input"
        id={props.id}
        type={props.type}
        step={props.step}
        min={props.min}
        placeholder={props.placeholder}
        onInput={props.onInput}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        data-tip
        data-for={props.dataFor}
        data-event={props.dataEvent}
        data-event-off={props.dataEventOff}
        autocomplete={props.autoComplete}
      />
    </div>
  );
};

export default Input;
