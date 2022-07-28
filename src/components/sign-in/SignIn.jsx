import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import SuccessNotification from "../SuccessNotification";
import { useState } from "react";
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

function SignIn({ setLoading, setCurrentUser }) {
  let [signIn, setSignIn] = useState({ email: "", password: "" });
  let { email, password } = signIn;

  let handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, async (currentUser) => {
        let dbUser = await createUserDoc(currentUser);
        setCurrentUser(dbUser);
      });

      setSignIn({ email: "", password: "" });
    } catch (error) {
      alert("Check your email or password");
      console.log(error);
    }
    setLoading(false);
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
      onAuthStateChanged(auth, async (currentUser) => {
        let dbUser = await createUserDoc(currentUser);
        setCurrentUser(dbUser);
      });
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
          <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
}

let mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn);
