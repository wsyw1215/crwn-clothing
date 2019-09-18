import React, { useState } from "react";
import "./SignUp.scss";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-buttom/CustomButtom";
import {
  auth,
  createUserProfileDocuments
} from "../../firebase/firebase.utils";
import useInputState from "../../hooks/useInputState";

const SignUp = () => {
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
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocuments(user, { displayName });
      resetDisplayName();
      resetEmail();
      resetPassword();
      resetConfirmPassword();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign-up">
      <h2>I do not have a account</h2>
      <span className="title">Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SignUp;
