import React from "react";
import "./Dropdown.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const DropDown = ({
  label,
  name,
  error,
  onchange,
  disabled,
  type,
  children,
}) => {
  return (
    <div className="input-drop">
      <label htmlFor={name}>{label}</label>
      <div className="input-wrapper">
        {/* <div className="arrow-icon">
          <TiArrowSortedDown />
        </div> */}
        <select
          id={name}
          name={name}
          type={type}
          className={error ? "error" : ""}
          disabled={disabled}
          onChange={onchange}
        >
          {children}
        </select>
        {error && <small className="label_error">{error}</small>}
      </div>
    </div>
  );
};

export default DropDown;
