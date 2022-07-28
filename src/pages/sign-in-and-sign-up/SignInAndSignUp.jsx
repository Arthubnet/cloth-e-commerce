import React, { useState } from "react";
import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
import { motion } from "framer-motion";
const SignInAndSignUpPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sign-in-and-sign-out"
    >
      <SignIn setLoading={setLoading} />
      <SignUp setLoading={setLoading} />
      {loading ? <LoadingSpinner /> : null}
    </motion.div>
  );
};

export default SignInAndSignUpPage;
