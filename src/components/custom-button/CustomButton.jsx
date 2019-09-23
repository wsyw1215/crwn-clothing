import React from "react";
import "./CustomButton.scss";

const CustomButtom = ({ children,isGoogleSignIn,inverted,...otherProps }) => {
  return (
    <button className={`custom-button ${isGoogleSignIn?'google-sign-in':''}  ${inverted?'inverted':''}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
