import React, { Component } from "react";
import { Progress, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import _ from 'lodash'
import { tokenAuth } from "../middleware/cookies-manager";
import { fetchApi } from "../middleware/api.js";
import "./Hasil.css";
import Nav_bar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pbw from "../pbw.png";
import jkw from "../jkw.jpg";

class Hasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGlobalPresiden: [],
      dataProvincePresiden: [],

    };
  }

  async componentWillMount() {
    const result = await fetchApi("/get-summary-presiden");
    console.log(result);
    if (result) {
      this.setState({ 
        dataGlobalPresiden: result.data.globalVoteResult,
        dataProvincePresiden: result.data.provincesVoteResult,  
      });
    }
  }

  render() {
    const { dataToken } = tokenAuth.tokenAuthenticated();
    return (
      <div style={{ height: "100%" }}>
        <Nav_bar userData={dataToken} />
        {/* <Footer /> */}

        <div className="container">
          <div className="text-center">
            <h1
              style={{
                paddingTop: "40px",
                fontSize: "2vmax",
                paddingBottom: "50px"
              }}
            >
              HASIL PERHITUNGAN SUARA<br />PEMILIHAN PRESIDEN DAN WAKIL PRESIDEN<br />TAHUN
              2019
            </h1>

            <Row>
              {this.state.dataGlobalPresiden.map((item, i) => (
                <Col>
                  {" "}
                  {console.log(item)}
                  {console.log(`http://localhost:3001/${item.img}`)}
                  <img
                    className="image"
                    src={`http://localhost:3001/${item.img}`}
                    alt=""
                  />{" "}
                  <h4 style={{ fontSize: "1.5vmax" }}>
                    <b>
                      {item.nama_presiden}-{item.nama_wakil}
                    </b>
                  </h4>
                  <div className="text-center">
                    {item.resultGlobalCalculate}%
                  </div>
                  <Progress color="" value={item.resultGlobalCalculate} />
                </Col>
              ))}
            </Row>

            <h3
              style={{
                fontSize: "3vmin",
                paddingTop: "40px",
                paddingBottom: "20px"
              }}
            >
              Rincian Perhitungan Suara
            </h3>
          </div>
          <div className="text-left" style={{ marginLeft: "100px" }}>

           {this.state.dataProvincePresiden.map((item, i) => (
             <div>
              <h4 style={{ fontSize: "3vmin" }}>
                <b>{item.province}</b>
              </h4>       
              {console.log(item.resultCount)}
             
                <div>
                 
                    {item.resultCount.map((itemCount) => (
                  <Row>
                  
                    <Col xs="6">
                      <p style={{ fontSize: "3vmin" }}>{itemCount.candidate}</p>
                    </Col>
                    <Col xs="6" sm="4">                     
                     {itemCount.count.toFixed(2) + "%"}       
                    <Progress color="" value={itemCount.count} />
                    </Col>
                  </Row>
                    ))}
              </div>
           
                
            </div>
             ))}

          </div>
        </div>
      </div>
    );
  }
}

export default Hasil;
