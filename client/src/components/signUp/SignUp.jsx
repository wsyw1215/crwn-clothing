import React from "react";
import { SignUpContainer, Title } from "./SignUp.styles";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-button/CustomButton";
import useInputState from "../../hooks/useInputState";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName, resetDisplayName] = useInputState("");
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");
  const [
    confirmPassword,
    setConfirmPassword,
    resetConfirmPassword
  ] = useInputState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart(email, password, displayName);
    resetDisplayName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };
  return (
    <SignUpContainer className="sign-up">
      <Title>I do not have a account</Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={displayName}
          handleChange={setDisplayName}
          required
          label="Name"
        />
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
        <FormInput
          type="password"
          value={confirmPassword}
          handleChange={setConfirmPassword}
          required
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
