import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act4 extends Component {
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
              กิจกรรมวันเด็ก
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
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0001.jpg?alt=media&token=049ed653-e8e3-4e0c-9708-76aa46eddaf9")'
              }}
            ></div>
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0002.jpg?alt=media&token=37f6db54-371a-4eec-afe9-101b6c8c4aa3")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0003.jpg?alt=media&token=75c110ce-c6d2-4935-96cf-29033f905e8b")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0004.jpg?alt=media&token=c480c761-1298-4d89-898c-cce99b75f117")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0005.jpg?alt=media&token=ae22baed-b025-41ed-a228-0fdf4b962dd3")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0006.jpg?alt=media&token=f6e70bcc-608a-4907-b937-c260e077d698")'
              }}
            ></div>

            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0007.jpg?alt=media&token=f8e60b4c-f4cf-412a-9ce6-de089e966d5f")'
              }}
            ></div>

            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0011.jpg?alt=media&token=c86214a1-dc56-4730-b7c1-78bbfafc833b")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81_200311_0009.jpg?alt=media&token=c9538a90-86bb-4d5c-8e5f-cd914fd54598")'
              }}
            ></div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div align="center">
            <Link to="/activities">
              <Button
                className="kanit"
                style={{
                  fontSize: "20px",
                  width: "150px",
                  height: "50px",
                  borderRadius: "6px"
                }}
                outline
                color="secondary"
              >
                <i class="fas fa-arrow-circle-left"></i> ย้อนกลับ
              </Button>
            </Link>
          </div>
        </Container>
      </>
    );
  }
}
