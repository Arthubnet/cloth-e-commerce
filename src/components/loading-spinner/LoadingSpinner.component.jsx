import React from "react";

import "./loading-spinner.styles.scss";

export default function LoadingSpinner() {
  return (
    <div className="spinner">
      <div className="spinner__loading"></div>
    </div>
  );
}
