import React from "react";
import { useHamOpen } from "../../../context/HamOpen-context";

const MenuButton = (props) => {
  // const [open, setOpen] = useState(props.open ? props.open : false);
  const { menuOpen, setMenuOpen } = useHamOpen();

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="flex-col cursor-pointer p-1 ml-2"
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
          menuOpen ? " rotate-45" : "-none"
        } origin-top-left mb-1`}
      />
      <div
        className={`transition-all duration-200 ease h-1 w-6 bg-white opacity${
          menuOpen ? "-0" : "-100"
        }`}
      />
      <div
        className={`transition-all duration-200 ease h-1 w-6 bg-white transform${
          menuOpen ? " -rotate-45" : "-none"
        } origin-bottom-left mt-1`}
      />
    </div>
  );
};

export default MenuButton;
