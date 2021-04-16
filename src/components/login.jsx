import React, { Component } from "react";
import "./login.css";
import log_ico from "../assets/log.svg";
import reg_ico from "../assets/register.svg";
import { checkAuth, signIn, signUp } from "../api/authentication";
class Login extends Component {
  state = {
    signup_mode: false,
    data: {},
  };
  handleSignup = () => {
    const signup_mode = !this.state.signup_mode;
    this.setState({ signup_mode });
  };
  hasNumber(myString) {
    return /\d/.test(myString);
  }

  handleSignupForm = async (v) => {
    v.preventDefault();
    var e = v.target;
    if (e.password.value !== e.confirm_password.value) {
      return alert("Passwords doesn't match");
    }
    if (!e.email.value.includes("kongu")) {
      return alert("Use Kongu Id");
    }
    try {
      await signUp(e.name.value, e.email.value, e.password.value);
      if (this.hasNumber(e.email.value)) this.props.history.push("/profile");
      //this.props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  };
  handleSignInForm = async (v) => {
    v.preventDefault();
    var e = v.target;
    try {
      await signIn(e.email.value, e.password.value);
      if (this.hasNumber(e.email.value)) this.props.history.push("/");
      this.props.history.replace("/tests");
    } catch (error) {
      alert(error.message);
    }
  };

  componentDidMount() {
    var user = checkAuth();
    console.log("hi user", user);
    if (user) {
      this.props.history.replace("/");
    }
  }
  render() {
    const { signup_mode } = this.state;
    return (
      <div className={signup_mode ? "container-l sign-up-mode" : "container-l"}>
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              className="sign-in-form"
              onSubmit={this.handleSignInForm}
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="email" placeholder="Username/Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>

              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form
              action="#"
              className="sign-up-form"
              onSubmit={this.handleSignupForm}
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
              </div>
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
