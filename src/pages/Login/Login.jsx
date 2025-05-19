import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <div className="parent login">
        <div className="cont login-cont">
          <div className="left">left</div>
          <div className="right">
            <h2>Login</h2>
            <p>
              <label for="">Email</label>
              <input type="text" className="form-row" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
