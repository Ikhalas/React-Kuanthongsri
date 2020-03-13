import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

import "../../assets/css/base.css";
import "../../assets/css/photo-grid.css";

export default class Act3 extends Component {
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
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0004.jpg?alt=media&token=8bc7d494-5162-48cf-b104-32824d05afc1")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0002.jpg?alt=media&token=daf3de66-5c5e-41a7-9b90-fc4cd85c38fc")'
              }}
            ></div>
            <div
              className="card card-tall"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0003.jpg?alt=media&token=b394348b-6a71-42cd-98ab-be86fea0c558")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0004.jpg?alt=media&token=8bc7d494-5162-48cf-b104-32824d05afc1")'
              }}
            ></div>
            <div
              className="card"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0006.jpg?alt=media&token=7e3a2b35-eb49-4239-9724-8748e8b4fcdb")'
              }}
            ></div>
            <div
              className="card card-tall card-wide"
              style={{
                backgroundImage:
                  'url("https://firebasestorage.googleapis.com/v0/b/kuanthongsri-cdc.appspot.com/o/activites%2F%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87%2F%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A5%E0%B8%AD%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%87_200311_0005.jpg?alt=media&token=5f7a5b0a-d383-43bc-bd03-0ab8aedffc58")'
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
