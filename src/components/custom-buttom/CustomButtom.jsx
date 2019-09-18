import React from "react";
import "./CustomButton.scss";

const CustomButtom = ({ children,isGoogleSignIn,...otherProps }) => {
  return (
    <button className={`custom-button ${isGoogleSignIn?'google-sign-in':''}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
