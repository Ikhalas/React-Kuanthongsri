import React, { Component } from "react";

export default class Staff extends Component {
  render() {
    return (
      <>
        <section className="staff kanit">
          <div
            style={{ color: "white", fontSize: "50px", fontWeight: "lighter" }}
          >
            <p style={{ paddingTop: "10%", paddingLeft: "5%", lineHeight:'120%' }}>
            <br/>
              ทำเนียบบุคลากร
              <br/><br/>
            </p>
          </div>
        </section>
        <div style={{ height: "100vh" }}></div>;
      </>
    );
  }
}
