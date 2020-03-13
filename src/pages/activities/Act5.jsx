import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act5 extends Component {
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
              กิจกรรมวันลอยกระทง
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
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0003.jpg?alt=media&token=85e636c2-0002-4651-80be-6c6173e1f271")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0001.jpg?alt=media&token=06e0baeb-8c0d-4377-ab23-33eea5917368")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0002.jpg?alt=media&token=078d1a72-f750-4e8c-a348-7e4fcf6ae36b")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0008.jpg?alt=media&token=c46e048f-a90d-4c6d-82e3-2172ea6f25c4")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0007.jpg?alt=media&token=926be8b7-7599-432e-9680-0975aaea8844")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0005.jpg?alt=media&token=80519822-80e0-4b62-9b9d-301f9431fc4b")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0011.jpg?alt=media&token=9fe4fd50-0f16-4fbc-a58b-a5179fcaa38f")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0010.jpg?alt=media&token=8db2340c-23cc-4495-ae41-d745003daba1")'
              }}
            ></div>
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%A1%E0%B9%88_200311_0009.jpg?alt=media&token=4c2868de-7b2f-4df7-a49c-fb6b3eb4f63c")'
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
