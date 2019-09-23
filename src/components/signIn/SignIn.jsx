import React from "react";
import useInputState from "../../hooks/useInputState";
import FormInput from "../formInput/FormInput";
import CustomButton from "../custom-buttom/CustomButtom";
import "./SignIn.scss";
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
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span className="title">Sign in with your Email and Password</span>
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Google Account
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
