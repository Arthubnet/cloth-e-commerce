import React from "react";

import "./form-input.styles.scss";

function FormInput({ onChange, value, label, ...rest }) {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...rest} />
      {label ? (
        <label className={`${value.length ? "shrink" : ""}  form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
