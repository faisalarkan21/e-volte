import React, { Component } from 'react';
import { Progress, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Hasil.css';
import Nav_bar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import pbw from '../pbw.png';
import jkw from '../jkw.jpg';


class Hasil extends Component {
    render() {
      return (
        <div style={{height:'100%'}}>
          <Nav_bar />
          <Footer />

          <div className="container">
            <div className="text-center">
              <h1 style={{paddingTop:'40px', fontSize:'2vmax'}}>HASIL PERHITUNGAN SUARA<br />PEMILIHAN PRESIDEN DAN WAKIL PRESIDEN<br />TAHUN 2019</h1>
            
          <Row>
            <Col>
              <img src={pbw} className="img-fluid z-depth-1 rounded-circle" alt="pbw" style={{width:'70%', paddingTop:'40px', paddingBottom:'20px'}}/>
              <h4 style={{fontSize:'3vmin'}}><b>PRABOWO-HATTA</b></h4>
              <div className="text-center">25%</div>
              <Progress color="warning" value="25" />
            </Col>
            <Col>
              <img src={jkw} className="img-fluid z-depth-1 rounded-circle" alt="jkw" style={{width:'70%', paddingTop:'40px', paddingBottom:'20px'}}/>
              <h4 style={{fontSize:'3vmin'}}><b>JOKOWI-JK</b></h4>
              <div className="text-center">50%</div>
              <Progress color="info" value="50" />
            </Col>
          </Row>

          <h3 style={{fontSize:'3vmin', paddingTop:'40px', paddingBottom:'20px'}}>Rincian Perhitungan Suara</h3>
           </div>
           <div className="text-left" style={{marginLeft:'100px'}}>
            <h4 style={{fontSize:'3vmin'}}><b>1. JAWA BARAT</b></h4>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Prabowo-Hatta</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="warning">25%</Progress>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Jokowi-JK</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="info">25%</Progress>
              </Col>
            </Row>

            <h4 style={{fontSize:'3vmin'}}><b>2. JAWA TIMUR</b></h4>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Prabowo-Hatta</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="warning">25%</Progress>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Jokowi-JK</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="info">25%</Progress>
              </Col>
            </Row>

            <h4 style={{fontSize:'3vmin'}}><b>3. JAWA TENGAH</b></h4>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Prabowo-Hatta</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="warning">25%</Progress>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Jokowi-JK</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="info">25%</Progress>
              </Col>
            </Row>

            <h4 style={{fontSize:'3vmin'}}><b>1. JAWA BARAT</b></h4>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Prabowo-Hatta</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="warning">25%</Progress>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p style={{fontSize:'3vmin'}}>Jokowi-JK</p>
              </Col>
              <Col xs="6" sm="4">
                <Progress value="25" color="info">25%</Progress>
              </Col>
            </Row>
           </div>

            </div>
        </div>
      );
    }
  }
  
  export default Hasil