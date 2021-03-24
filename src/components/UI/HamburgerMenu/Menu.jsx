import React, { useEffect, useState } from "react";

const Menu = (props) => {
  const [open, setOpen] = useState(props.open ? props.open : false);
  // const [open, setOpen] = useState(true);

  useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  }, [props]);

  return (
    <div
      className={`absolute top-0 left-0 h${
        open ? "-screen" : "-0"
      } w-screen bg-black bg-opacity-75 `}
      // display: "flex",
      // flexDirection: "column",
      // color: "#fafafa",
    >
      {open ? <div className="pt-16">{props.children}</div> : null}
    </div>
  );
};

export default Menu;
