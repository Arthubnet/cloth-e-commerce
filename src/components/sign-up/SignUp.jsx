import React, { useState } from "react";
import "./sign-up.styles.scss";
import SuccessNotification from "../SuccessNotification";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
/* Firebase */
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
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

function SignUp({ setLoading, setCurrentUser, modalActive, setModalActive }) {
  let [signUp, setSignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let { displayName, password, email, confirmPassword } = signUp;

  let handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Check your password");
    } else {
      try {
        setLoading(true);
        /* prettier-ignore*/
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password);
        /* Updates displayName in firebase object */
        await updateProfile(user, {
          displayName: displayName,
        });
        /* creates Doc with user's uid */
        await addCollection(displayName, email, user.uid);
        onAuthStateChanged(auth, async (currentUser) => {
          let dbUser = await createUserDoc(currentUser);
          await setCurrentUser(dbUser);
          setModalActive((modalActive = true));
        });

        setSignUp({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        alert(error);
      }
      setLoading(false);
    }
  };

  let handleChange = (event) => {
    let { name, value } = event.target;

    setSignUp({ ...signUp, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required={true}
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required={true}
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required={true}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required={true}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

let mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
