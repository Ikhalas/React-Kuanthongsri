import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {

    return (
      <>
        <nav className="nav">
          <div className="container">
            <div className="logo">
            <Link to="/home" ><span className="regular-th" style={{fontSize:'45px'}}></span></Link>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks">
                <li>
                  <Link to="/home">หน้าหลัก</Link>
                </li>
                <li>
                <Link to="/activities">ภาพกิจกรรม</Link>
                </li>
                <li>
                <Link to="/staff">บุคลากร</Link>
                </li>
                <li>
                <Link to="/contact">ติดต่อ</Link>
                </li>
              </ul>
            </div>
            <span className="navTrigger">
              <i />
              <i />
              <i />
            </span>
          </div>
        </nav>
      </>
    );
  }
}
