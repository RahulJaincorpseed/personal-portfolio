import React from "react"
import "./LoginPage.scss"
import InputComponent from "./InputComponent"

const SignupPage = () => {
  return (
    <div className="login-page">
      <div className="left-circle">
        <div className="small-circle">Please sign up</div>
      </div>
      <div className="right-circle">
        <div className="small-circle">Please sign up</div>
      </div>
      <div className="ractangle"></div>
      <div className="ractangle-two"></div>
      <div className="login-form">
        <h2 className="main-heading">Sign Up</h2>
        <div className="py-4">
          <InputComponent
            icon={<i class="fa-regular side-icon fa-user"></i>}
            type="text"
            placeholder="Enter Your Name"
          />
          <InputComponent
            icon={<i class="fa-regular side-icon fa-envelope"></i>}
            type="email"
            placeholder="Enter Your Email"
          />
          <InputComponent
            icon={<i class="fa-solid side-icon fa-lock"></i>}
            type="password"
            placeholder="Enter Your password"
          />
          <InputComponent
            icon={<i class="fa-solid side-icon fa-lock"></i>}
            type="password"
            placeholder="Enter Your Confirm password"
          />
        </div>
        <button className="login-btn">Sign Up</button>
      </div>
    </div>
  )
}

export default SignupPage
