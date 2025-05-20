import React, { useEffect, useState } from "react";
import "./ChangePassword.scss";
import axios from "axios";
import UseForm from "../../UseForm";
import changePasswordValidation from "../../validation/ChangePassword";
import Input from "../../comp/input/Input";
import { Link, Navigate, useSearchParams } from "react-router-dom";

const ChangePassword = () => {
  const [searchParams] = useSearchParams();

  const paramsEmail = searchParams.get("email");
  const [status, setStatus] = useState(false);

  if (!paramsEmail) {
    return <Navigate to="/login" replace />;
  }

  const formObj = {
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

  const passwordChange = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}user/updatePassword`,
        values
      );
      if (response.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
      if (error.status === 404) {
        setError({ email: "Invalid credentials" });
      }
      if (error.status === 400) {
        setError({ newPassword: "Old and new password must differ." });
        setStatus(true);
      }
    }
  };

  const { handleChange, handleSubmit, values, error, setError, setValues } =
    UseForm(formObj, changePasswordValidation, passwordChange);

  useEffect(() => {
    if (paramsEmail) {
      setValues((prev) => ({
        ...prev,
        email: paramsEmail,
      }));
    }
  }, [paramsEmail]);

  return (
    <>
      <div className="parent changepassword">
        <div className="cont changepassword-cont">
          <div class="left bg-img-cover"></div>
          <div class="right">
            <h2>Change Password</h2>
            <form action="" onSubmit={handleSubmit}>
              <div class="form-row">
                <Input
                  label="New Password"
                  placeholder="Enter your password"
                  onchange={handleChange}
                  value={values.newPassword}
                  error={error.newPassword}
                  name="newPassword"
                />
              </div>

              <div class="form-row">
                <Input
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                  onchange={handleChange}
                  value={values.confirmPassword}
                  error={error.confirmPassword}
                  name="confirmPassword"
                />
              </div>

              <button class="btn" type="submit">
                Update Password
              </button>
              {status && <Link to="/login">Back To Login</Link>}

              <div class="btn-wrapper">
                <Link to="/login" class="back-btn">
                  {/* <span>
                                  <IoChevronBackSharp />
                                </span> */}
                  <p>Back to login</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
