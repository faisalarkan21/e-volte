import React, { Component } from 'react';
import { Container, Row, Col,Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import './Vote.css';
import Nav_bar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import surat from '../surat.png';
import pbw from '../pbw.png';
import jkw from '../jkw.jpg';

class Vote extends Component {
    render() {
      return (
        <div>
          <Nav_bar />
          <Footer />
          <div className="container" style={{position:'relative'}}>
            <img src={surat} className="surat img-fluid" alt="surat" />
              <div className="centered">
                <h3 className="text-center" style={{color:'white',fontSize:'4vmin', lineHeight:'2'}}><b>SURAT SUARA<br />PEMILIHAN UMUM</b></h3>
              </div>
                <h4 className="text-center" style={{fontSize:'3vmin'}}><b>PRESIDEN DAN WAKIL PRESIDEN<br />REPUBLIK INDONESIA<br />TAHUN 2019</b></h4>

          <Container style={{paddingTop:'50px', paddingBottom:'70px'}}>
            <Row>
              <Col xs="6">
                <Card>
                  <CardHeader className="text-center" style={{fontSize:'2vmax'}}><b>1</b></CardHeader>
                    <div className="pilih">
                      <img src={pbw} className="image" alt="pbw"/>
                        <div class="middle">
                          <Button color="danger" size="lg">Pilih</Button>
                        </div>
                    </div>
                  <CardFooter className="text-center" >
                    <Row>
                      <Col xs="6" style={{fontSize:'2vmin'}}>
                      CALON PRESIDEN<br />
                      <b>H. Prabowo Subianto</b>
                      </Col>
                      <Col xs="6" style={{fontSize:'2vmin'}}>
                       CALON WAKIL PRESIDEN<br />
                      <b>Ir. H. M. Hatta Rajasa</b>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
              <Col xs="6">
                <Card>
                  <CardHeader className="text-center" style={{fontSize:'2vmax'}}><b>2</b></CardHeader>
                  <div className="pilih">
                      <img src={jkw} className="image" alt="jkw"/>
                        <div class="middle">
                          <Button color="danger" size="lg">Pilih</Button>
                        </div>
                    </div>
                  <CardFooter className="text-center">
                    <Row>
                      <Col xs="6" style={{fontSize:'2vmin'}}>
                      CALON PRESIDEN<br />
                      <b>Ir. H. Joko Widodo</b>
                      </Col>
                      <Col xs="6" style={{fontSize:'2vmin'}}>
                      CALON WAKIL PRESIDEN<br />
                      <b>Drs. H. M. Jusuf Kalla</b>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            </Container>

            
          
          
          </div>
        </div>
      );
    }
  }
  
  export default Vote