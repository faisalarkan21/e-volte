import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  Table,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { fetchApi } from "../middleware/api.js";
import { postApi } from "../middleware/api.js";
import { tokenAuth } from "../middleware/cookies-manager";
import "./Vote.css";
import Nav_bar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import surat from "../surat.png";
import pbw from "../pbw.png";
import jkw from "../jkw.jpg";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPresiden: [],
      titleVote: "",
      voteStatus: "c1",
      dateNow: new Date(),
      voteDisable: "",
      isOpenConfirm: false,
      idSelected: "",
      isButtonDisabled: false
    };
    this.onHandleVote = this.onHandleVote.bind(this);
    this.handleConfirmVote = this.handleConfirmVote.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  async onHandleVote(id_presiden) {
    if (id_presiden) {
      const userData = tokenAuth.tokenAuthenticated();
      const data = await postApi("/voteAll-capres", {
        id_presiden,
        id_user: userData.dataToken._id
      });
      console.log(data);
      if (data.status === 200) {
        tokenAuth.setVoted(true);
        this.setState({
          isButtonDisabled: true,
          isOpenConfirm: false
        });
      }
    }

    this.setState({
      isOpenConfirm: false
    });
  }

  async componentWillMount() {
    const userData = tokenAuth.tokenAuthenticated();
    console.log(userData);
    console.log(userData.dataToken.role == "0");
    if (userData.dataToken.role == "0") {
      this.setState({
        isButtonDisabled: true
      });
    }

    const checkIsVoted = await fetchApi(
      `/get-user?userId=${userData.dataToken._id}`
    );
    console.log(checkIsVoted.data);
    if (checkIsVoted.data.isVoted) {
      this.setState({
        isButtonDisabled: true
      });
    }
    const result = await fetchApi("/get-all-presiden");
    if (result) {
      this.setState({ dataPresiden: result.data });
    }
    console.log(result);
  }

  handleConfirmVote(id) {
    this.setState({ idSelected: id, isOpenConfirm: true });
  }

  render() {
    const { dataToken } = tokenAuth.tokenAuthenticated();

    return (
      <div>
        <Nav_bar userData={dataToken} />
        <Footer />
        <div className="container" style={{ position: "relative" }}>
          <img src={surat} className="surat img-fluid" alt="surat" />
          <div className="centered">
            <h3
              className="text-center"
              style={{ color: "white", fontSize: "2vmax", lineHeight: "2" }}
            >
              <b>
                SURAT SUARA<br />PEMILIHAN UMUM
              </b>
            </h3>
          </div>
          <h4 className="text-center" style={{ fontSize: "1.5vmax" }}>
            <b>
              PRESIDEN DAN WAKIL PRESIDEN<br />REPUBLIK INDONESIA<br />TAHUN
              2019
            </b>
          </h4>

          <Container style={{ paddingTop: "50px", paddingBottom: "70px" }}>
            <Row>
              {this.state.dataPresiden.map((item, i) => (
                <Col xs="5" style={{ margin: 20 }}>
                  <Card>
                    <CardHeader
                      className="text-center"
                      style={{ fontSize: "2vmax" }}
                    >
                      <b>{i + 1}</b>
                    </CardHeader>
                    <div className="pilih">
                      {" "}
                      <img
                        className="image"
                        src={`http://localhost:3001${item.img}`}
                        alt=""
                      />{" "}
                      <div class="middle">
                        <Button
                          color="danger"
                          size="lg"
                          onClick={() => this.handleConfirmVote(item._id)}
                          disabled={this.state.isButtonDisabled}
                        >
                          Pilih
                        </Button>

                        {this.state.isOpenConfirm && (
                          <ModelConfirm
                            id={this.state.idSelected}
                            toggle={this.state.isOpenConfirm}
                            onHandleVote={this.onHandleVote}
                          />
                        )}
                      </div>
                    </div>
                    <CardFooter className="text-center">
                      <Row>
                        <Col xs="6" style={{ fontSize: "2vmin" }}>
                          CALON PRESIDEN<br />
                          <b>{item.nama_presiden}</b>
                        </Col>
                        <Col xs="6" style={{ fontSize: "2vmin" }}>
                          CALON WAKIL PRESIDEN<br />
                          <b>{item.nama_wakil}</b>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const ModelConfirm = ({ id, toggle, onHandleVote }) => {
  console.log(id);
  return (
    <Modal isOpen={toggle}>
      <ModalHeader toggle={toggle}>Konfirmasi Pilihan</ModalHeader>

      <ModalBody>Apakah Anda yakin dengan pilihan Anda?</ModalBody>

      <ModalFooter>
        <Button
          color="primary"
          toggle={toggle}
          onClick={() => onHandleVote(id)}
        >
          Ya
        </Button>{" "}
        <Button color="secondary" onClick={() => onHandleVote()}>
          Tidak
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default Vote;
