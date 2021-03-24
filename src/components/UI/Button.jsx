import React from "react";

const Button = ({ id, button, onClick }) => {
  return (
    <div>
      <button id={id} className="Button" onClick={onClick}>
        {button}
      </button>
    </div>
  );
};

export default Button;
