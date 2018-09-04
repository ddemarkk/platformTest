import React, { Component } from "react";
import Select from "react-select";
import InputMask from "react-input-mask";
import { NavLink } from "react-router-dom";

class RegForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passTrue: false,
      confPassTrue: false,
      checked: false,
      pass: "",
      confPass: "",
      styles: {},
      selectedOption: null,
      postCode: "",
      states: [
        { label: "Alaska", value: "35816" },
        { label: "Alabama", value: "99524" },
        { label: "Arizona", value: "85055" },
        { label: "Arkansas", value: " 72217" },
        { label: "California", value: "94209" },
        { label: "Colorado", value: "80239" },
        { label: "Connecticut", value: "06112" },
        { label: "District of Columbia", value: "20020" }
      ]
    };
  }
  handleCheck = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleSelectedOption = selected => {
    let { selectedOption } = this.state;
    this.setState({ selectedOption: selected });
    let kpt = Object.values(selected);
    this.setState({ postCode: kpt[1] });

    //console.log(kpt, this.state.states[0].value);
  };
  handlePassword = event => {
    let strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    if (strongRegex.test(event.target.value)) {
      this.setState({
        styles: { border: "2px  solid green" }
      });
      this.setState({ passTrue: true });
      this.setState({ pass: event.target.value });
    } else if (!strongRegex.test(event.target.value)) {
      this.setState({
        styles: { border: "2px  solid red" }
      });
      this.setState({ passTrue: false });
      this.setState({ pass: "" });
    }
  };
  handleConfirmPassword = event => {
    this.setState({ confPass: event.target.value });
    this.setState({ confPassTrue: true });
  };
  render() {
    return (
      <div className="formContainer">
        <div className="wrapper" />
        <div className="logo">
          <p id="logoText">Cupak</p>
        </div>
        <form
          className="form"
          action="/"
          method="post"
          encType="multipart/form-data"
        >
          <label id="name" htmlFor="fName">
            First Name
          </label>
          <input
            className="fName"
            type="text"
            placeholder="Maksist "
            required
          />
          <label id="surname" htmlFor="sName">
            {"Surname"}
          </label>
          <input className="sName" type="text" placeholder="Taksist" required />
          <label id="email" htmlFor="email">
            {"Email"}
          </label>
          <input
            className="email"
            type="email"
            placeholder="example@email.com"
            required
          />
          <label id="phoneNumber" htmlFor="pNumber">
            {"Phone number"}
          </label>
          <InputMask
            {...this.props}
            placeholder="+493864967"
            className="pNumber"
            mask="+4\9 99 999 99"
            maskChar=" "
            required
          />

          <label id="state" htmlFor="Select">
            {"State"}
          </label>
          <Select
            styles={this.state.customStyles}
            placeholder="Ohio"
            className="Select"
            value={this.state.selectedOption}
            onChange={this.handleSelectedOption}
            options={this.state.states}
          />
          <label id="zipCode" htmlFor="zip">
            {"Zip code"}
          </label>
          <input
            className="zip"
            type="text"
            placeholder="Zip code"
            readOnly
            value={this.state.postCode}
          />
          <label id="password" htmlFor="pass">
            {"Password"}
          </label>
          <input
            onChange={this.handlePassword}
            className="pass"
            type="password"
            placeholder=""
            required
            style={this.state.styles}
          />
          <label id="confirm" htmlFor="confPass">
            {"Confirm password"}
          </label>
          <input
            className="confPass"
            type="password"
            placeholder=""
            style={
              this.state.confPass === this.state.pass ? this.state.styles : null
            }
            required
            onChange={this.handleConfirmPassword}
          />
          <div className="agreed">
            <input
              className="check"
              type="checkbox"
              placeholder="I agree"
              required
              onClick={this.handleCheck}
            />
            <p id="agree">I agree with Privacy Policies</p>
          </div>
          {this.state.checked ? (
            <button className="butt">Sign Up</button>
          ) : (
              <button className="butt" disabled style={{ opacity: 0.5 }}>
                Sign Up
            </button>
            )}
          <p id="logLink">
            Already have an account?
            <NavLink id="toLoginLink" to="/">
              Log In
            </NavLink>
          </p>
        </form>
      </div>
    );
  }
}

export default RegForm;
