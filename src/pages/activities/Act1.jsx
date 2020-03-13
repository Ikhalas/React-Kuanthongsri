import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act1 extends Component {
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
              กิจกรรมเกมเพื่อการศึกษา
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
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0002.jpg?alt=media&token=0ef267d8-242f-4c30-963a-6c36f4a5ae7a")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0005.jpg?alt=media&token=e80ff866-57df-48e9-b1bd-0a46a9290857")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0001.jpg?alt=media&token=eb2f538d-d269-4b03-b7eb-aa73415fb7ce")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0003.jpg?alt=media&token=79ae5af1-cc91-45bf-b30a-776d625c5518")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0005.jpg?alt=media&token=e80ff866-57df-48e9-b1bd-0a46a9290857")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0006.jpg?alt=media&token=913a08a2-155a-4c5a-a9ea-cffc5fbfbc14")'
              }}
            ></div>
            <div
              className="card card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0007.jpg?alt=media&token=963a7f85-6063-45c7-b28f-af336042c951")'
              }}
            ></div>

            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2_200311_0009.jpg?alt=media&token=529cf181-8da2-46ce-a3c8-34b5aef97447")'
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
