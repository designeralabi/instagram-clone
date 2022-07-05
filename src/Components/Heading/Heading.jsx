import React, { Component } from "react";
import logo from "./logo.png";
import "./Heading.css";

export default class Heading extends Component {
  render() {
    return (
      <div className="heading_container">
        <img src={logo} id="logo" alt="instagram_logo" />
        <input type="search" id="search" placeholder="Search" />
        <div className="button_wrapper">
          <button id="login">Log In</button>
          <button id="signup">Sign Up</button>
        </div>
      </div>
    );
  }
}
