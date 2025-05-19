import React from "react";
import "./Input.scss";
const Input = ({
  label,
  value,
  name,
  onchange,
  type = "text",
  placeholder,
  error
}) => {
  return (
    <>
      <div class="input">
        <label for="">{label}</label>
        <input
        className={error ? "error"  : ""}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onchange}
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
