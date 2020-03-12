import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="kanit"
          style={{
            backgroundColor: "#343a40",
            marginTop: 100,
            textAlign: "center",
            color: "#dfdfdf"
          }}
        >
          <br />
          <br />
          <p style={{ fontSize: "20px" }}>ออกแบบและพัฒนาโดย</p>
          <p style={{ fontSize: "15px" }}>
            นักศึกษาระดับ ปวส.2 สาขาคอมพิวเตอร์ธุรกิจ
            วิทยาลัยอาชีวศึกษาโปลีเทคนิคตรัง
          </p>
          <br />
          <br />
        </div>
        <div
          className="regular-th"
          style={{
            backgroundColor: "#212529",
            color: "#dfdfdf",
            fontSize: "20px"
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Made with{" "}
          <i className="fas fa-heart" style={{ fontSize: "10px" }}></i> and{" "}
          <i className="fas fa-coffee" style={{ fontSize: "10px" }}></i> by Ikhalas
          :X
        </div>
      </>
    );
  }
}
