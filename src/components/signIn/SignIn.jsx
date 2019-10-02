import React from "react";
import useInputState from "../../hooks/useInputState";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInContainer, Title, ButtonsContainer } from "./SignIn.styles";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetEmail();
      resetPassword();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          handleChange={setEmail}
          required
          label="Email"
        />
        <FormInput
          type="password"
          value={password}
          handleChange={setPassword}
          required
          label="Password"
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Google Account
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
