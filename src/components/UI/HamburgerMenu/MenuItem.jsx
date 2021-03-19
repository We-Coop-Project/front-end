import React, { useState } from "react";

const MenuItem = (props) => {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const styles = {
    container: {
      animation: "1s appear forwards",
      animationDelay: props.delay,
    },
    menuItem: {
      animation: "0.5s slideIn forwards",
      animationDelay: props.delay,
    },
    line: {
      animation: "0.5s shrink forwards",
      animationDelay: props.delay,
    },
  };

  return (
    <div className="opacity-0" style={styles.container}>
      <div
        className={`text-2xl p-4 ${
          hover ? "text-gray-400" : "text-white"
        } text-center`}
        style={styles.menuItem}
        onMouseEnter={() => {
          handleHover();
        }}
        onMouseLeave={() => {
          handleHover();
        }}
        onClick={props.onClick}
      >
        {props.children}
      </div>
      <div className="h-1 bg-white mx-auto" style={styles.line} />
    </div>
  );
};

export default MenuItem;
