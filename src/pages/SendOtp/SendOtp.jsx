import React from "react";
import "./SendOtp.scss";
import Input from "../../comp/input/Input";
import OTPInput from "react-otp-input";
import UseForm from "../../UseForm";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
const SendOtp = () => {
  const formObj = {
    email: "",
  };
  const validateError = (value) => {
    let errors = {};
    if (!value.email) {
      errors.email = "Email is Requried";
    }
    return errors;
  };
  const [searchParma] = useSearchParams();
  const paraemail = searchParma.get("email");

  const sendOtp = async () => {
    try {

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}user/SendOtp?Email=${values.email}`
      );

      console.log(response)
    } catch (error) {
        console.log(error)
    }
  };



  const { handleChange, handleSubmit, values, error } = UseForm(
    formObj,
    validateError,
    sendOtp
  );

  return (
    <>
      <div class="send_otp_parent parent">
        <div class="send_otp_cont cont">
          <div class="left_side"></div>
          <div class="right_side">
            <h2>Send Otp</h2>
            <form action="" onSubmit={handleSubmit}>
              <div class="form-row">
                <Input
                  label={error.email ? error.email : "Enter Your Email"}
                  placeholder="Enter Your Email"
                  name= "email"
                  value={values.email}
                  onchange={handleChange}
                />
              </div>

              {paraemail && (
                <div class="form-row otp-row">
                  <label for="">Enter Otp</label>
                  <OTPInput
                    inputType="number"
                    numInputs={5}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              )}

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
