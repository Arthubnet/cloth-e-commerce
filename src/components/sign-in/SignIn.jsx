import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import "./sign-in.styles.scss";
/* prettier-ignore */
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  auth,
  addCollection,
  createUserDoc,
} from "../../firebase/firebase.utils";

/* Redux */
import { connect } from "react-redux";
import { setCurrentUser } from "./../../redux/user/user.actions";

/* Motion */

import { motion, AnimatePresence } from "framer-motion";

function SignIn({
  setLoading,
  setCurrentUser,
  setModalActive,
  modalActive,
  loginActive,
  setLoginActive,
}) {
  let [signIn, setSignIn] = useState({ email: "", password: "" });
  let { email, password } = signIn;

  let handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
      await setCurrentUser(user);
      setLoading(false);
      setModalActive((modalActive = true));
      setSignIn({ email: "", password: "" });
    } catch (error) {
      setLoading(false);
      alert("Check your email or password");
      console.log(error);
    }
  };

  let handleChange = (event) => {
    let { name, value } = event.target;
    setSignIn({ ...signIn, [name]: value });
  };

  let signInWithGoogle = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      await addCollection(user.displayName, user.email, user.uid);
      await setCurrentUser(user);
      setModalActive((modalActive = true));
    });
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
      className="sign-in"
    >
      <h1>Login Here</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          {/* prettier-ignore */}
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
        <p>
          Not yet member?{" "}
          <span onClick={() => setLoginActive(!loginActive)}>Signup Now</span>
        </p>
      </form>
    </motion.div>
  );
}

let mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
