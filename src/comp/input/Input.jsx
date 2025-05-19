import React, { useState } from "react";
import "./Input.scss";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";

const Input = ({
  label,
  value,
  name,
  onchange,
  type = "text",
  placeholder,
  error,
  password,
}) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <>
      <div class="input">
        <label for="">{label}</label>
        <div class="wraper">
          <input
            className={error ? "error" : ""}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onchange}
            type={`${eyeOpen ? "text" : type}`}
          />
          {password && (
            <span className="eye-icon" onClick={() => setEyeOpen(!eyeOpen)}>
              {eyeOpen ? <PiEyeLight /> : <PiEyeSlash />}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
