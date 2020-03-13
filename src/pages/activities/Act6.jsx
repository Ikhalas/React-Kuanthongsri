import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act6 extends Component {
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
              กิจกรรมวันไหว้ครู
              <br />
              <br />
            </p>
          </div>
        </section>
        <br />
        <br />

        <Container>
          <div className="photo-grid">
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0005.jpg?alt=media&token=3062c00b-6f5e-4b65-8e1b-5dae6fb2a90c")'
              }}
            ></div>
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0004.jpg?alt=media&token=d81e726c-90ad-4b4e-9b63-efa0f4e72da6")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0003.jpg?alt=media&token=8b392f26-1158-4ffa-91a8-136fc8eabc07")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0002.jpg?alt=media&token=9a61d09e-c48d-42ae-ad00-8bd9cf8248ca")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0006.jpg?alt=media&token=e0603810-0221-4a41-987c-304e35d3f667")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0007.jpg?alt=media&token=3e521502-df5f-45e3-add9-f4065bae9ed8")'
              }}
            ></div>
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0008.jpg?alt=media&token=81207de7-a69b-4825-8d4d-e86843a94367")'
              }}
            ></div>
             <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B9%89%E0%B8%84%E0%B8%A3%E0%B8%B9_200311_0009.jpg?alt=media&token=8b4bf157-2ff4-4e8f-8169-8adf1a4a5bb8")'
              }}
            ></div>
            
                      
          </div>
          <br /><br /><br /><br />
          <div align="center">
            <Link to="/activities">
              <Button className="kanit" style={{fontSize:'20px', width:'150px',height:'50px', borderRadius: '6px'}} outline color="secondary">
              <i class="fas fa-arrow-circle-left"></i>{' '}
                ย้อนกลับ
              </Button>
            </Link>
          </div>
        </Container>
      </>
    );
  }
}
