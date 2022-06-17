import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.styles.scss";

function Error() {
  let history = useNavigate();
  return (
    <div className="error">
      <h1>We couldn't find that page</h1>
      <button onClick={() => history("/")}>Back to Homepage</button>
    </div>
  );
}

export default Error;
