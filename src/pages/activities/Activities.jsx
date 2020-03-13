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
              ภาพกิจกรรมของน้อง ๆ
              <br />
              <br />
            </p>
          </div>
        </section>
        <br />
        <div>
          <Container>
            <Row>
              <Col md="4" className="mt-3">
                <Link to="/activities-1">
                  <Card style={{ backgroundColor: "white" }}>
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
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4" className="mt-3">
                <Link to="/activities-2">
                  <Card style={{ backgroundColor: "white" }}>
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
                     
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4" className="mt-3">
                <Link to="/activities-3">
                  <Card style={{ backgroundColor: "white" }}>
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
                        กิจกรรมวันลอยกระทง
                      </CardTitle>
                      <br />
                  
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="mt-3">
                <Link to="/activities-4">
                  <Card style={{ backgroundColor: "white" }}>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0002.jpg?alt=media&token=37f6db54-371a-4eec-afe9-101b6c8c4aa3"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        กิจกรรมวันเด็ก
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4" className="mt-3">
                <Link to="/activities-5">
                  <Card style={{ backgroundColor: "white" }}>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0003.jpg?alt=media&token=85e636c2-0002-4651-80be-6c6173e1f271"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        กิจกรรมวันแม่
                      </CardTitle>
                     
                    </CardBody>
                  </Card>
                </Link>
              </Col>
              <Col md="4" className="mt-3">
                <Link to="/activities-6">
                  <Card style={{ backgroundColor: "white" }}>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0005.jpg?alt=media&token=3062c00b-6f5e-4b65-8e1b-5dae6fb2a90c"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        กิจกรรมวันไหว้ครู
                      </CardTitle>
                      <br />
                  
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="mt-3">
                <Link to="/activities-7">
                  <Card style={{ backgroundColor: "white" }}>
                    <CardImg
                      style={{ padding: "15px 15px 0px 15px" }}
                      top
                      width="100%"
                      src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%2F%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3_200311_0010.jpg?alt=media&token=b15b32db-c0da-4f49-8e46-4ae5595e4f6a"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle
                        className="kanit"
                        style={{ fontSize: "25px", color: "black" }}
                      >
                        โครงการส่งเสริมพัฒนาการเด็กปฐมวัย
                      </CardTitle>
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
