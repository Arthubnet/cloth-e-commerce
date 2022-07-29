import React, { useState } from "react";
import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import SuccessNotification from "../../components/SuccessNotification";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner.component";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

const SignInAndSignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  let [loginActive, setLoginActive] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sign-in-and-sign-out"
    >
      <div className="login-btns"></div>
      <AnimatePresence>
        {loginActive ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <SignIn
              setModalActive={setModalActive}
              modalActive={modalActive}
              setLoading={setLoading}
              loginActive={loginActive}
              setLoginActive={setLoginActive}
              key="1"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            exit={{ opacity: 0 }}
            key="2"
          >
            <SignUp
              setModalActive={setModalActive}
              modalActive={modalActive}
              setLoading={setLoading}
              loginActive={loginActive}
              setLoginActive={setLoginActive}
            />
          </motion.div>
        )}{" "}
      </AnimatePresence>

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
