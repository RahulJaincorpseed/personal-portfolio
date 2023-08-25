import React from "react"
import "./LoginPage.scss"
import InputComponent from "./InputComponent"

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-circle">
        <div className="small-circle">Please Login</div>
      </div>
      <div className="right-circle">
        <div className="small-circle">Please Login</div>
      </div>
      <div className="ractangle"></div>
      <div className="ractangle-two"></div>
      <div className="login-form">
        <h2 className="main-heading">Login</h2>
        <div className="py-4">
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
        </div>
        <button className="login-btn">Login</button>
      </div>
    </div>
  )
}

export default LoginPage
