import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="regular-th" style={{ fontSize: "50px" }}>
        <ul>
          <NavLink activeClassName="active" to="/">
            <li>home</li>
          </NavLink>

          <NavLink activeClassName="active" to="/contact">
            <li>contact</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}
