import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act2 extends Component {
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
              กิจกรรมกลางแจ้ง
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
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0001.jpg?alt=media&token=e2cfe966-69d3-4208-8e64-a88d97bde226")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0006.jpg?alt=media&token=11f8ed0e-bb07-4324-93ea-5f82b7ec371c")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0005.jpg?alt=media&token=13b9be86-9890-4582-907d-3c9427136691")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0004.jpg?alt=media&token=2a8d71eb-87e9-440f-bf56-ae6f5031357d")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0008.jpg?alt=media&token=08ca0249-5a1c-4599-b3df-6893a10c4da9")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0007.jpg?alt=media&token=04fb04b7-aea2-400f-8676-91707f6a236e")'
              }}
            ></div>
            <div
              className="card card-wide card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0009.jpg?alt=media&token=68be253f-af5f-4bac-91e5-1964473b6ca2")'
              }}
            ></div>

            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0009.jpg?alt=media&token=68be253f-af5f-4bac-91e5-1964473b6ca2")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87_200311_0011.jpg?alt=media&token=38b053b3-fdb4-4222-bbd0-bf8af80392f5")'
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
