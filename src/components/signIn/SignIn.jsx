import React from "react";
import useInputState from "../../hooks/useInputState";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { SignInContainer, Title, ButtonsContainer } from "./SignIn.styles";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
    resetEmail();
    resetPassword();
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
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Google Account
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
