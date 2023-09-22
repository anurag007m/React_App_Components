import React from "react";
import "./customUI.css";

const CustomButtonOrange = ({
  prefixIcon,
  text,
  onClick,
  isActive = true,
  isEnabled = true,
}) => {
  return (
    <div
      className={isActive && isEnabled ? "btn btnOrange" : "btn grey"}
      onClick={isEnabled ? onClick : null}
    >
      {text}
    </div>
  );
};

export default CustomButtonOrange;
