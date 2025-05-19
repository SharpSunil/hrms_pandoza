import React from "react";
import "./SendOtp.scss";
import Input from "../../comp/input/Input";
import OTPInput from "react-otp-input";
const SendOtp = () => {
  return (
    <>
      <div class="send_otp_parent parent">
        <div class="send_otp_cont cont">
          <div class="left_side"></div>
          <div class="right_side">
            <h2>Send Otp</h2>
            <form action="">
              <div class="form-row">
                <Input
                  label="Enter Your Email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div class="form-row otp-row">
                <label for="">Enter Otp</label>
                <OTPInput
                 inputType="number"
                  numInputs={5}
  
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <div class="form-row">
                <button type="submit" className="btn">
                  Send Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendOtp;
