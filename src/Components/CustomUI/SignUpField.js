// SignUpField.js
import React from "react";

const SignUpField = ({ prefixIcon, value, placeholder }) => {
  return (
    <div className="input">
      <img src={prefixIcon} alt="" />
      <input type="text" value={value} placeholder={placeholder} />
    </div>
  );
};

export default SignUpField;
