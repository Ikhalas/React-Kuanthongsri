import React, { Component } from "react";
import { MobileView, isMobile } from "react-device-detect";
import Calendar from "react-calendar";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col, Button } from "reactstrap";

//import '../../assets/css/home.css'
import "react-calendar/dist/Calendar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const monthNames = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม"
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    let newDate = new Date();
    this._date = newDate.getDate();
    this._month = newDate.getMonth();
    this._year = newDate.getFullYear() + 543;
  }

  getMonth() {}
  render() {
    return (
      <>
        {" "}
        <section className="home kanit">
          <div
            style={{ color: "white", textAlign: "center", paddingTop: "16%" }}
          >
            <div style={{ lineHeight: "90px" }}>
              <p
                style={{
                  fontSize: "85px",
                  color: "#ffc40b",
                  fontWeight: "bold"
                }}
                className="kanit"
              >
                ศูนย์พัฒนาเด็กเล็ก
                {MobileView && isMobile ? <br/> : ''}
                ควนทองสีห์
              </p>
              <p
                style={{
                  fontSize: "40px",
                  color: "#ffc40b",
                  fontWeight: "lighter"
                }}
                className="kanit"
              >
                ตำบลบางเป้า อำเภอกันตัง จังหวัดตรัง
              </p>
            </div>
            <div
              style={{ fontSize: "20px", fontWeight: "lighter" }}
              className="kanit"
            >
              <p>
                อบรม เลี้ยงดู และส่งเสริมพัฒนาการให้มีความพร้อม</p>
               <p> ด้านร่างกายอารมณ์ จิตใจ สังคมและสติปัญญา</p>
              
            </div>
            <br />
            <br />
            <br />
            <Button className="kanit home-btn" outline color="danger">
              เปิดรับสมัครแล้ววันนี้
            </Button>
            <br />
            <br />{" "}
            <Button
              className="kanit yellow-btn home-btn"
              outline
              color="warning"
            >
              ทำเนียบบุคลากร
            </Button>
            <br />
            <br />{" "}
            <Button className="kanit home-btn" outline color="primary">
              ติดต่อเรา
            </Button>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                paddingTop: "8%"
              }}
              className="kanit"
            >
              ภาพกิจกรรมของน้อง ๆ
            </p>
            <br />
            <div align="center">
              <Carousel
                width="60%"
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
              >
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3.jpg?alt=media&token=05b6822e-7d72-4690-a7e1-18a27e344c79" />
                  <p className="legend">โครงการส่งเสริมพัฒนาการ</p>
                </div>
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9.jpg?alt=media&token=1f3a6d35-e46c-4138-9e2a-4a0c774078c0" />
                  <p className="legend">กิจกรรมไหว้ครู</p>
                </div>
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87.jpg?alt=media&token=729ce595-0d44-4a0b-b8b9-39641fae82a4" />
                  <p className="legend">กิจกรรมวันลอยกระทง</p>
                </div>
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81.jpg?alt=media&token=777f6005-3fa5-44d5-988a-f88cfa2891b8" />
                  <p className="legend">กิจกรรมวันเด็ก</p>
                </div>
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88.jpg?alt=media&token=7fa74a91-6791-4d11-bebc-505e5b96ac06" />
                  <p className="legend">กิจกรรมวันแม่</p>
                </div>
              </Carousel>
            </div>
          </div>
          <br /> <br />
        </section>
        <div>
          <div
            style={{
              backgroundColor: "#fff"
            }}
          >
            <marquee
              style={{ fontSize: 35, color: "gray" }}
              className="regular-th"
              direction="left"
              scrollamount="8"
              scrolldelay="5"
            >
              ยินดีต้อนรับเข้าสู่เว็บไซต์ศูนย์พัฒนาเด็กเล็กควนทองสีห์
              ตำบลบางเป้า อำเภอกันตัง จังหวัดตรัง
            </marquee>
          </div>{" "}
          {/*marquee*/}
          <br />
          <br />
          <br />
          <Container>
            <p
              className="kanit"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              ข่าวประชาสัมพันธ์
            </p>
            <Row>
              <Col md="9">
                <p />
                <p />
                <img
                  style={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 2px gray"
                  }}
                  width="100%"
                  src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/home-section.jpg?alt=media&token=d2bbfcaa-423b-44b3-b476-c540554309a0"
                />
              </Col>
              <Col md="3" className="pl-5" style={{ padding: 0 }}>
                {" "}
                <br />
                <br />
                <br />
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: "300%",
                    fontWeight: "bold",
                    color: "#3f7ca5",
                    textShadow: "1px 0px gray"
                  }}
                >
                  <p />
                  <p />
                  <p style={{ fontSize: 80 }}>{this._date}</p>
                  <p className="regular-th" style={{ fontSize: 50 }}>
                    {monthNames[this._month]} {this._year}
                  </p>
                </div>
                <div style={{ fontSize: 15 }}>
                  <Calendar
                    locale="th-Th"
                    calendarType="US"
                    value={this.state.date}
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ paddingTop: 130 }} className="kanit">
              <Col md="7">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  บทบาทและหน้าที่
                </p>
                <hr />
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  คือ การให้บริการ การอบรมเลี้ยงดู
                  เสริมสร้างประสบการณ์และส่งเสริมพัฒนาการเรียนรู้
                </p>
                <p style={{ fontSize: "15px", fontWeight: "normal" }}>
                  ศูนย์พัฒนาเด็กเล็กเป็นสถานศึกษาที่ให้การอบรมเลี้ยงดูจัดประสบการณ์และส่งเสริมพัฒนาการเรียนรู้ให้เด็กเล็กได้รับการพัฒนา
                  ทั้งด้านร่างกาย อารมณ์-จิตใจ สังคม
                  และสติปัญญาที่เหมาะสมตามวัยตามศักยภาพของเด็กแต่ละคน ดังนั้น
                  ระยะเวลาการจัดการเรียนรู้และแนวทางการจัดการเรียนรู้ของศูนย์พัฒนาเด็กเล็กจึงต้องดำเนินการอย่างต่อเนื่องและเหมาะสมเพื่อให้เด็กเล็กได้รับการศึกษาและพัฒนาเป็นไปตามวัยแต่ละช่วงอายุ
                  สอดคล้องกับสังคม วัฒนธรรม ภูมิปัญญาท้องถิ่น
                  และหลักสูตรการศึกษาปฐมวัย
                  ให้เด็กเล็กพร้อมที่จะเข้ารับการศึกษาในระดับที่สูงขึ้นต่อไป
                </p>
              </Col>
              <Col md="5">
                <div className="pl-5 pt-5" style={{ padding: "auto" }}>
                  <img
                    width="90%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/infomation%2Fchild-home.png?alt=media&token=6411d194-a5fc-4461-ade6-192b0cc1ab53"
                  />
                </div>
              </Col>
            </Row>
            <Row style={{ paddingTop: 100 }} className="kanit">
              <Col md="6">
                {" "}
                <div className="pr-3" style={{ padding: "auto" }}>
                  <img
                    width="100%"
                    src="https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/infomation%2Fchild-home-2.png?alt=media&token=1295dea3-5783-4cd0-870d-cb9ecd35f014"
                  />
                </div>
              </Col>
              <Col md="6">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  ภารกิจในการพัฒนาเด็กปฐมวัย
                </p>
                <hr />
                <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                  การจัดการศึกษาระดับปฐมวัยเน้นที่การ เตรียมความพร้อมให้กับเด็ก
                </p>
                <p style={{ fontSize: "15px", fontWeight: "normal" }}>
                  การให้ความรักความอบอุ่น ส่งเสริมพัฒนาการสำหรับเด็กอายุ 3-6 ปี
                  ให้เกิดวุฒิภาวะทางกาย อารมณ์ สังคม และสติปัญญา
                  โดยให้โอกาสทั้งเด็กปกติ เด็กด้อยโอกาส
                  และเด็กที่มีความต้องการพิเศษ ให้ได้รับการพัฒนาเต็มตามศักยภาพ
                  หลักสูตรการจัดการศึกษาระดับปฐมวัยนั้นมีจุดมุ่งหมายเพื่อให้เด็กมีพัฒนาการที่ครอบคลุม
                  ด้านร่างกาย จิตใจ สังคม และสติปัญญา
                </p>
              </Col>
            </Row>
            <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br />
            <br /> <br /> <br />{" "}
            <div>
              <i
                className="fas fa-eye"
                style={{ fontSize: "20px", color: "#ffc40b" }}
              ></i>
              <span style={{ fontSize: "18px" }}>&nbsp;&nbsp;HITS: 200</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i
                className="fab fa-facebook"
                style={{ fontSize: "25px", color: "#ffc40b" }}
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i
                className="fab fa-facebook-messenger"
                style={{ fontSize: "25px", color: "#ffc40b" }}
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i
                className="fab fa-line"
                style={{ fontSize: "25px", color: "#ffc40b" }}
              ></i>
            </div>
            <br />
          </Container>
          <div style={{ backgroundColor: "white" }}>
            <br />
            <br />
            <Container>
              <div
                className="fb-comments"
                data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
                data-width="100%"
                data-numposts="5"
              ></div>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
