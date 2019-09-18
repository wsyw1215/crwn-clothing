import React from "react";
import SignIn from "../../components/signIn/SignIn.jsx";
import SignUp from "../../components/signUp/SignUp.jsx";
import "./SignPage.scss";

const SignPage = () => {
  return (
    <div className="SignPage">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignPage;
