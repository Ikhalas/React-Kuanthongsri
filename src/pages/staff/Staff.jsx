import React, { Component } from "react";

export default class Staff extends Component {
  render() {
    return (
      <>
        <section className="staff kanit">
          <div
            style={{ color: "white", fontSize: "60px", fontWeight: "lighter" }}
          >
            <p style={{ paddingTop: "140px", paddingLeft: "100px" }}>
              ทำเนียบบุคลากร
            </p>
          </div>
        </section>
        <div style={{ height: "100vh" }}></div>;
      </>
    );
  }
}
