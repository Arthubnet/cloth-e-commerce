import React, { useEffect } from "react";

import "./success-notification.styles.scss";
/* Redux */
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { connect } from "react-redux";
/* Framer motion */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SuccessNotification({ modalActive, setModalActive, currentUser }) {
  let navigate = useNavigate();
  let onSuccessRegistration = () => {
    setModalActive((modalActive = false));
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal-background"
    >
      <div className="modal">
        <h2>
          Hello, <span>{currentUser.displayName}</span>
        </h2>
        <p>We are glad to see you, enjoy shoping.</p>
        <button onClick={() => onSuccessRegistration()}>Continue</button>
      </div>
    </motion.div>
  );
}

let mapPropsToState = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapPropsToState)(SuccessNotification);
