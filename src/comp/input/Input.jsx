import React, { useState } from "react";
import "./Input.scss";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const Input = ({
  label,
  value,
  name,
  onchange,
  type = "text",
  placeholder,
  error,
  password,
  disabled,
  extra_label,
  maxLength,
}) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const inputType = password ? (eyeOpen ? "text" : "password") : type;

  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <div className="wraper">
        <input
          className={(error ? "error" : "") + (extra_label ? " extralabel" : "")}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onchange}
          type={inputType}
          maxLength={maxLength}
          {...(type !== "file" && { value: value || "" })}
        />
        {extra_label && <span className="extra_label"> {extra_label} </span>}
        {error && <small className="label_error">{error}</small>}
        {password && (
          <span className="eye-icon" onClick={() => setEyeOpen(!eyeOpen)}>
            {eyeOpen ? <PiEyeLight /> : <PiEyeSlash />}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
