import React from "react";

const Button = ({ id, button }) => {
  return (
    <div>
      <button id={id} className="Button">
        {button}
      </button>
    </div>
  );
};

export default Button;
