import React from 'react'
import "./SendOtp.scss"
import Input from '../../comp/input/Input'
const SendOtp = () => {
  return (
    <>
      <div class="send_otp_parent parent">
        <div class="send_otp_cont cont">
            <div class="left_side"></div>
            <div class="right_side">
                <h2>
                        Send Otp
                    </h2>
                <form action="">
                    
                    <div class="form-row">
                      <Input
                      label="Enter Your Email"
                      placeholder="Enter Your Email"
                      />
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default SendOtp
