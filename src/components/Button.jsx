import React from "react";
import btnIcon from "../assets/button-icon.png";

const Button = ({ text }) => {
  return (
    <button className="text-sm text-amber-500 flex items-center cursor-pointer">
      {text}
      <img src={btnIcon} alt="btn icon" />
    </button>
  );
};

export default Button;
