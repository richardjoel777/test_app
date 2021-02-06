import React, { Component } from "react";
import "./login.css";
import log_ico from "../assets/log.svg";
import reg_ico from "../assets/register.svg";
class Login extends Component {
  state = {
    signup_mode: false,
  };
  handleSignup = () => {
    const signup_mode = !this.state.signup_mode;
    this.setState({ signup_mode });
  };
  render() {
    const { signup_mode } = this.state;
    return (
      <div
        className={
          signup_mode ? "container-login sign-up-mode" : "container-login"
        }
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username/Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>

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

              <label for="Faculty">
                <input
                  type="checkbox"
                  id="Faculty"
                  name="Faculty"
                  value="Staff"
                />{" "}
                Yes, I'm a faculty{" "}
              </label>

              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <button
                className="btn transparent"
                onClick={this.handleSignup}
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={log_ico} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <center>
                <h3>One of us ?</h3>
                <button
                  className="btn transparent"
                  onClick={this.handleSignup}
                  id="sign-in-btn"
                >
                  Sign in
                </button>
              </center>
            </div>
            <img src={reg_ico} className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
