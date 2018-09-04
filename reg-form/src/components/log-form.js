import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="logFormContainer">
        <div className="logWrapper" />
        <div className="logLogo">
          <p id="logLogoText">Cupak</p>
        </div>

        <form
          className="loginForm"
          action="/"
          method="post"
          encType="multipart/form-data"
        >
          <h3 id="logText">Log in to Cupak Website</h3>
          <label id="logEmail" htmlFor="email">
            {"Email"}
          </label>
          <input
            className="logEmail"
            type="email"
            placeholder="you@email.com"
            required
          />
          <label id="logPassword" htmlFor="pass">
            {"Password"}
          </label>
          <input
            onChange={this.handlePassword}
            className="logPass"
            type="password"
            placeholder="Enter a secure password"
            required
          />
          <button className="logButt">Log In</button>
          <p id="resetPassLink">
            Forgot your password?
            <NavLink id="resetLink" to="/resetPassword">
              Reset password
            </NavLink>
          </p>
          <p id="regLink">
            Don't have an account?
            <NavLink id="signLink" to="/registration">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}

export default LogForm;
