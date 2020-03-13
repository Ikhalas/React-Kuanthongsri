import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact kanit">
          <div
            style={{ color: "white", fontSize: "50px", fontWeight: "lighter" }}
          >
            <p
              style={{
                paddingTop: "10%",
                paddingLeft: "5%",
                lineHeight: "120%"
              }}
            >
              <br />
              ติดต่อเรา
              <br />
              <br />
            </p>
          </div>
        </section>
        <div className="kanit">
          <br />
          <br />
          <br /> <br />
          <Container style={{ color: "black", fontSize: "30px" }}>
            <Row>
              <Col md="7">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>ที่อยุ่</p>
                <hr />
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  ศูนย์พัฒนาเด็กเล็กบ้านควนทองสีห์
                </p>
                <p style={{ fontSize: "20px", fontWeight: "normal" }}>
                  หมู่ที่ 6 ตำบลบางเป้า อำเภอกันตัง จังหวัดตรัง รหัสไปรษณีย์
                  92110
                </p>
              </Col>
              <Col md="5">
                <div className="pt-5" style={{ textAlign: "center" }}>
                  <img
                    width="50%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/map.png?alt=media&token=8c8619c1-c61a-4b47-8881-3e0dd4dd03df"
                  />
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="5">
                <div className="pt-5" style={{ textAlign: "center" }}>
                  <img
                    width="40%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/tel.png?alt=media&token=32f2d9bf-bf88-4f03-be06-e61227e6181b"
                  />
                </div>
              </Col>
              <Col md="1"></Col>
              <Col md="6">
                <div className="pt-5">
                  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                    เบอร์โทรศัพท์
                  </p>
                  <hr />
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                    &nbsp;&nbsp;&nbsp;08-8751-4423
                  </p>
                  <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                    &nbsp;&nbsp;&nbsp;09-1647-5229
                  </p>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="7">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Facebook</p>
                <hr />
                <p style={{ fontSize: "30px", fontWeight: "bold", textAlign:"center" }}>
                  <br/>
                  <a
                    className="kanit"
                    style={{ fontSize: 16 }}
                    target="_blank"
                    href="https://www.facebook.com/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%AB%E0%B9%8C-624942007659233/"
                    title="Facebook"
                    className="btn btn-facebook btn-lg"
                  >
                    <i className="fab fa-facebook-f"></i> ศูนย์พัฒนาเด็กเล็กบ้านควนทองสีห์
                  </a>
                </p>
              </Col>
              <Col md="5">
                <div className="pt-5" style={{ textAlign: "center" }}>
                  <img
                    width="60%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/facebook.png?alt=media&token=5d5d54fa-33d2-44f4-8e00-bff9ad43f38a"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </>
    );
  }
}
