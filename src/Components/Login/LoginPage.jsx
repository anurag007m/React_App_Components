import React, { useState } from "react";

import "./LoginSignUp.css";

import user_icon from "../Assets/person.png";

import email_icon from "../Assets/email.png";

import password_icon from "../Assets/password.png";

import CustomTextField from "../CustomUI/customTextField";

// import SignUpField from "../CustomUI/SignUpField";

import CustomButtonOrange from "../CustomUI/CustomButtonOrange";

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <CustomTextField prefixIcon={user_icon} placeholder="Name" />
        )}

        <CustomTextField prefixIcon={email_icon} placeholder="Email Id" />
        <CustomTextField prefixIcon={password_icon} placeholder="Password" />
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <CustomButtonOrange
          text="Sign Up"
          isActive={action === "Sign Up"}
          onClick={() => {
            setAction("Sign Up");
          }}
        />
        <CustomButtonOrange
          text="Login"
          isActive={action === "Login"}
          onClick={() => {
            setAction("Login");
          }}
        />
      </div>
    </div>
  );
};

export default LoginSignUp;
