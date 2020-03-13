import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

export default class Activities extends Component {
  render() {
    return (
      <>
        <section className="activity kanit">
          <div
            style={{ color: "white", fontSize: "60px", fontWeight: "lighter" }}
          >
            <p style={{ paddingTop: "10%", paddingLeft: "5%" }}>
              ภาพกิจกรรมของน้อง ๆ
            </p>
          </div>
        </section>
        <br />
        <div style={{ height: "100vh" }}>
          <Container>
            <Row>
              <Col md="4">
                <Link>
                  <Card>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0004.jpg?alt=media&token=8e0f4c2b-b9d2-4c60-ac53-35117b7668ba"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        กิจกรรมเกมเพื่อการศึกษา
                      </CardTitle>
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4">
                <Link>
                  <Card>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0006.jpg?alt=media&token=11f8ed0e-bb07-4324-93ea-5f82b7ec371c"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        กิจกรรมกลางแจ้ง
                      </CardTitle>
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4">
                <Link>
                  <Card>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0004.jpg?alt=media&token=8bc7d494-5162-48cf-b104-32824d05afc1"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        วันลอยกระทง
                      </CardTitle>
                      <br />
                      <br />
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
