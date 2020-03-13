import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chkbox: false
    };
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    document.body.appendChild(script);
  }

  handleChangeChk = () => {
    this.setState({ chkbox: !this.state.chkbox },()=>{
      //console.log(this.state.chkbox)
    });
  };

  render() {
    const {chkbox} = this.state
    return (
      <>
        <nav className="nav">
          <div className="container">
            <div className="logo">
              <Link to="/home">
                <span
                  className="regular-th"
                  style={{ fontSize: "45px" }}
                ></span>
              </Link>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks" style={{ left: chkbox ? '50%': '100%' }}>
                <li>
                  <Link to="/home" onClick={this.handleChangeChk}>หน้าหลัก</Link>
                </li>
                <li>
                  <Link to="/activities" onClick={this.handleChangeChk}>ภาพกิจกรรม</Link>
                </li>
                <li>
                  <Link to="/staff" onClick={this.handleChangeChk}>บุคลากร</Link>
                </li>
                <li>
                  <Link to="/contact" onClick={this.handleChangeChk}>ติดต่อ</Link>
                </li>
              </ul>
            </div>
            <span className="navTrigger">
              <input
                type="checkbox"
                id="check"
                defaultChecked={this.state.chkbox}
                onChange={this.handleChangeChk}
              />
              <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars" />
              </label>
            </span>
          </div>
        </nav>
      </>
    );
  }
}
