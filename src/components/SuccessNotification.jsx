import React from "react";

import "./success-notification.styles.scss";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
/* Redux */
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { connect } from "react-redux";

function SuccessNotification({ modalActive, setModalActive, currentUser }) {
  let navigate = useNavigate();

  let onSuccessRegistration = () => {
    setModalActive((modalActive = false));
    navigate("/");
  };
  return (
    <div className="modal-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="modal"
      >
        <h2>
          Welcome, <span>{currentUser.displayName}</span>!
        </h2>
        <p>You account has been created.</p>
        <button onClick={() => onSuccessRegistration()}>Continue</button>
      </motion.div>
    </div>
  );
}

let mapPropsToState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapPropsToState)(SuccessNotification);
