import React, { useState } from "react";
import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import SuccessNotification from "../../components/SuccessNotification";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";
/* Framer Motion */
import { motion } from "framer-motion";

const SignInAndSignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sign-in-and-sign-out"
    >
      <SignIn
        setModalActive={setModalActive}
        modalActive={modalActive}
        setLoading={setLoading}
      />
      <SignUp
        setModalActive={setModalActive}
        modalActive={modalActive}
        setLoading={setLoading}
      />
      {loading ? <LoadingSpinner /> : null}
      {modalActive ? (
        <SuccessNotification
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
      ) : null}
    </motion.div>
  );
};

export default SignInAndSignUpPage;
