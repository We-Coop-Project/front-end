import React, { useState } from "react";

/* MenuItem.jsx*/
const MenuItem = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     hover:false,
  //   }
  // }
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    //   this.setState({hover:!this.state.hover});
    setHover(!hover);
  };

  const styles = {
    container: {
      opacity: 0,
      animation: "1s appear forwards",
      animationDelay: props.delay,
    },
    menuItem: {
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: "1.2rem",
      padding: "1rem 0",
      margin: "0 5%",
      cursor: "pointer",
      color: hover ? "gray" : "#fafafa",
      transition: "color 0.2s ease-in-out",
      animation: "0.5s slideIn forwards",
      animationDelay: props.delay,
      textAlign: "center",
    },
    line: {
      width: "90%",
      height: "1px",
      background: "gray",
      margin: "0 auto",
      animation: "0.5s shrink forwards",
      animationDelay: props.delay,
    },
  };

  return (
    <div style={styles.container}>
      <div
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
      <div style={styles.line} />
    </div>
  );
};

export default MenuItem;
