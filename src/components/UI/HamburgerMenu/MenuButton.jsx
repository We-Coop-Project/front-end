import React, { useEffect, useState } from "react";

const MenuButton = (props) => {
  const [open, setOpen] = useState(props.open ? props.open : false);

  useEffect(() => {
    if (props.open !== open) {
      setOpen(props.open);
    }
  }, [props]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="hidden flex-col cursor-pointer p-1 lg:flex"
      onClick={
        props.onClick
          ? props.onClick
          : () => {
              handleClick();
            }
      }
    >
      <div
        className={`transition-all duration-200 ease h-1 w-6 bg-white transform${
          open ? " rotate-45" : "-none"
        } origin-top-left mb-1`}
      />
      <div
        className={`transition-all duration-200 ease h-1 w-6 bg-white opacity${
          open ? "-0" : "-100"
        }`}
      />
      <div
        className={`transition-all duration-200 ease h-1 w-6 bg-white transform${
          open ? " -rotate-45" : "-none"
        } origin-bottom-left mt-1`}
      />
    </div>
  );
};

export default MenuButton;
