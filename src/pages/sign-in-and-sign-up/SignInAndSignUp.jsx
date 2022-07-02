import React, { useState } from "react";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import "./sign-in-and-sign-out.styles.scss";

const SignInAndSignUpPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="sign-in-and-sign-out">
      <SignIn setLoading={setLoading} />
      <SignUp setLoading={setLoading} />
      {loading ? <LoadingSpinner /> : null}
    </div>
  );
};

export default SignInAndSignUpPage;
