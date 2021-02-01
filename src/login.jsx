import React from "react";
import ico from "./assets/log.svg";
import reg_ico from "./assets/register.svg";
const Login = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>

            <input type="submit" value="Login" className="btn solid" />
            <a href="">Forgot password?</a>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={ico} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div class="content">
            <center>
              <h3>One of us ?</h3>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </center>
          </div>
          <img src={reg_ico} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
