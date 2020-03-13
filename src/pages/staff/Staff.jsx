import React, { Component } from "react";
import { MobileView, isMobile } from "react-device-detect";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

export default class Staff extends Component {
  render() {
    return (
      <>
        <section className="staff kanit">
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
              ทำเนียบบุคลากร
              <br />
              <br />
            </p>
          </div>
        </section>
        <div>
          <br />
          <br />
          <br />
          <Container>
            <Row>
              <Col md="6" sm="12" align="center" className="pt-3">
                <Card
                  style={
                    MobileView && isMobile
                      ? { backgroundColor: "white", width: "100%" }
                      : { backgroundColor: "white", width: "50%" }
                  }
                >
                  <CardImg
                    style={{ padding: "15px 15px 0px 15px" }}
                    top
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/teachers%2FS__36339733.jpg?alt=media&token=5feafc99-4874-4fd0-929e-58c4b7f561e1"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                      className="kanit"
                      style={{ fontSize: "20px", color: "black" }}
                    >
                      นางสาววณิชา ผดุงกิจอนันต์
                      <br /> <br />
                      <p style={{ fontSize: "15px" }}>
                        รักษาการหัวหน้าศูนย์พัฒนาเด็กเล็กและครูผู้สอน
                      </p>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" sm="12" align="center" className="pt-3">
                <Card
                  style={
                    MobileView && isMobile
                      ? { backgroundColor: "white", width: "100%" }
                      : { backgroundColor: "white", width: "50%" }
                  }
                >
                  <CardImg
                    style={{ padding: "15px 15px 0px 15px" }}
                    top
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/teachers%2FS__36339735.jpg?alt=media&token=ce5b3b78-2098-4724-b77a-0b9236f356a0"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle
                      className="kanit"
                      style={{ fontSize: "20px", color: "black" }}
                    >
                      นางชบาทิพย์ สงไข
                      <br /> <br />
                      <p style={{ fontSize: "15px" }}>ครูผู้สอน</p>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        ;
      </>
    );
  }
}
