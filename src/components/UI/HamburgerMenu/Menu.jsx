import React, { useEffect, useState } from "react";

const Menu = (props) => {
  const [open, setOpen] = useState(props.open ? props.open : false);

  useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  }, [props]);

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      // height: open ? "100%" : 0,
      height: open ? "100vh" : 0,
      width: "100vw",
      // width: "50vw",
      display: "flex",
      flexDirection: "column",
      // background: "black",
      background: "rgba(0, 0, 0, .6)",
      opacity: 0.95,
      color: "#fafafa",
      transition: "height 0.3s ease",
      // zIndex: 2,
      //   zIndex: 99,
    },
    menuList: {
      paddingTop: "3rem",
    },
  };
  return (
    <div style={styles.container}>
      {open ? <div style={styles.menuList}>{props.children}</div> : null}
    </div>
  );
};

export default Menu;
