import React from "react";
import "./ForgotPassword.scss";
import Input from "../../comp/input/Input";

function ForgotPassword() {
  return (
    <>
      <div class="forgot parent">
        <div class="forget-cont cont">
          <div class="left"></div>
          <div class="right">
            <h2>Forgot Pasword</h2>
            <form action="">
              <div class="form-row">
                <Input label="Password" placeholder="Enter your password" />
              </div>

              <div class="form-row">
                <Input
                  label="Confirm Password"
                  placeholder="Enter confirm password"
                />
              </div>

              <div class="btn">Update Password</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
