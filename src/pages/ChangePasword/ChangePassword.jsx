import React from "react";
import "./ChangePassword.scss";

const ChangePassword = () => {
  return (
    <>
      <div className="parent changepassword">
        <div className="cont changepassword-cont">
          <div class="left"></div>
          <div class="right">
            <h2>Change Password</h2>
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
};

export default ChangePassword;
