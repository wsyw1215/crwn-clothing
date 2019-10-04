import React from "react";
import SignIn from "../../components/signIn/SignIn.jsx";
import SignUp from "../../components/signUp/SignUp.jsx";
import {SignPageContainer} from "./SignPage.styles"

const SignPage = () => {
  return (
    <SignPageContainer>
      <SignIn />
      <SignUp/>
    </SignPageContainer>
  );
};

export default SignPage;
