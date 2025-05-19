import React from "react";
import "./Login.scss";
import Input from "../../comp/input/Input";


const Login = () => {
  return (
    <>
      <div className="parent login">
        <div className="cont login-cont">
          <div className="left">left</div>
          <form className="right">
            <h2>Login</h2>
            <div className="form-row">
              <Input placeholder="email" label="Email" />
            </div>
            <div className="form-row" >
              <Input type="password" placeholder="password" label="Password" password={true} />
            </div>
            <p>Forgot Password?</p>
            <div class="btn">Login</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
