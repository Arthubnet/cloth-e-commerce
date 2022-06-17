import React from "react";
import CustomButon from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in.styles.scss";
/* prettier-ignore */
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./../../firebase/firebase.utils";

function SignIn() {
  let [signIn, setSignIn] = useState({ email: "", password: "" });
  let { email, password } = signIn;

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSignIn({ email: "", password: "" });
    } catch (error) {
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
    await signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
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
          <CustomButon type="submit">Sign in</CustomButon>
          {/* prettier-ignore */}
          <CustomButon
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn>Sign in with Google</CustomButon>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
