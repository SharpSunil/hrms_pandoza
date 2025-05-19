import React, { useEffect, useState } from "react";
import "./SendOtp.scss";
import Input from "../../comp/input/Input";
import OTPInput from "react-otp-input";
import UseForm from "../../UseForm";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../comp/loader/Loader";
const SendOtp = () => {
  const [loader, setLoader] = useState(false);
  const formObj = {
    email: "",
    otp: "",
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
      setLoader(true);

      let response;
      if (paraemail) {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}user/VerifyOtp?Email=${
            values.email
          }&Otp=${values.otp}`
        );

        if (response.status === 200) {
          window.location.href = `/change-password`;
        }
      } else {
        response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}user/SendOtp?Email=${
            values.email
          }`
        );

        if (response.status === 200) {
          window.location.href = `/otp?email=${values.email}`;
        }
      }
    } catch (error) {
      console.log(error);
      if (error.status === 404) {
        setError({ email: "User Not Found" });
      }

      if (error.status === 400) {
        setError({ otp: "Invalid Otp" });
      }
    } finally {
      setLoader(false);
    }
  };

  const { handleChange, handleSubmit, values, error, setError, setValues } =
    UseForm(formObj, validateError, sendOtp);

  useEffect(() => {
    if (paraemail) {
      setValues((prev) => ({
        ...prev,
        email: paraemail,
      }));
    }
  }, [paraemail]);

  return (
    <>
      {loader && <Loader />}
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
                  name="email"
                  value={values.email}
                  type="email"
                  onchange={handleChange}
                  error={error.email}
                  disabled={paraemail}
                />
              </div>

              {paraemail && (
                <div class="form-row otp-row">
                  <label style={{color : `${error.otp ? "orangered" : ""}`}} for=""> {error.otp ? "Invalid Otp" : "Enter Otp"} </label>
                  <OTPInput
                    inputType="number"
                    numInputs={5}
                    name="otp"
                    renderInput={(props) => <input {...props} />}
                    value={values.otp}
                    onChange={(otp) => setValues({ ...values, otp })}
                  />
                </div>
              )}

              <div class="form-row">
                <button type="submit" className="btn">
                  {
                    paraemail ? "Verify Otp" : "Send Otp"
                  }
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
