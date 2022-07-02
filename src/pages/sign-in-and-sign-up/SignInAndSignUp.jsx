import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
