import React, { Component } from "react";
import { postApi } from "../middleware/api.js";
import "./Login.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Col,
  Row
} from "reactstrap";
import { tokenAuth } from "../middleware/cookies-manager";
import word from "../word.png";
import vote from "../evoting.png";
import peta from "../B2.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      noKtp: "",
      noKk: "",
      email: "",
      password: "",
      confirmpassword: "",
      showAlert: "",
      statusLogin: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleSubmitLogin = this.onHandleSubmitLogin.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onHandleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state.name);
  }

  onHandleChangeLogin(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state.noKtp);
  }

  async onHandleSubmit() {
    const { name, noKtp, noKk, email, password, confirmpassword } = this.state;
    try {
      var { status } = await postApi("/signup", this.state);
      this.setState({ showAlert: false });
      console.log(status);
    } catch (e) {
      this.setState({ showAlert: true });
      console.log(e);
    }
    if (status === 200) {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  async onHandleSubmitLogin() {
    const { noKtp, noKk, password } = this.state;
    const res = await postApi("/login", this.state);
    console.log(res);
    if (res.status === 200) {
      tokenAuth.setCookies(res.data.data.token, res.data.data.user);
      return this.props.history.push("/home");
    }

    this.setState({ statusLogin: "Data yang Anda masukkan salah!" });
  }

  render() {
    const { noKtp, noKk, password } = this.state;
    const isEnabled =
      noKk.length > 0 && password.length > 0 && noKtp.length > 0;
    console.log(isEnabled);
    return (
      <div>
        <div className="split left">
          <div className="text-left">
            <img
              src={vote}
              className="img-fluid"
              alt="vote"
              style={{
                width: "170px",
                height: "auto",
                paddingLeft: "20px",
                paddingBottom: "50px"
              }}
            />
          </div>
          <div className="text-center">
            <img src={peta} className="img-fluid" alt="peta" />
          </div>
          <blockquote
            class="blockquote text-center"
            style={{ paddingTop: "100px", fontSize: "3vmin" }}
          >
            <p className="text-center">
              Karena memilih lewat Pemilu, bukan seperti melempar dadu. Kita
              semua yang akan menentukan, nasib Indonesia di masa depan.
            </p>
            <footer class="blockquote-footer" style={{ color: "white" }}>
              Najwa Shihab
            </footer>
          </blockquote>

          <div className="split right">
            <p className="text-right" style={{fontSize: "1vmax"}}>Anda belum login.</p>
            <div className="text-center">
              <img src={word} className="img-fluid" alt="word" />
              <p className="text-muted" style={{fontSize: "1vmax"}}>
                Silahkan Daftar terlebih dahulu untuk membuat Password
              </p>
            </div>
            <div
              className="text-center"
              style={{ color: "red", paddingBottom: "10px" }}
            >
              {this.state.statusLogin}
            </div>

            <Container>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">No. KTP</Label>
                      <Input
                        type="noKtp"
                        name="noKtp"
                        id="noKtp"
                        onChange={e => this.onHandleChangeLogin(e)}
                        placeholder="Masukkan Nomor KTP"
                      />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="exampleEmail">No. KK</Label>
                    <Input
                      type="noKk"
                      name="noKk"
                      id="noKk"
                      onChange={e => this.onHandleChangeLogin(e)}
                      placeholder="Masukkan Nomor KK"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      onChange={e => this.onHandleChangeLogin(e)}
                      placeholder="Masukkan Password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Button
              disabled={!isEnabled}
              style={{ marginLeft: "230px" }}
              color="primary"
              onClick={this.onHandleSubmitLogin}
            >
              Login
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              color="danger"
              onClick={this.toggle}
            >
              Daftar
            </Button>
          </div>
        </div>
        <div>
          <footer className="footer1">
            <p>© e-Voting Pemilihan Presiden 2019</p>
          </footer>
        </div>
        <div>
          <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Daftar</ModalHeader>
            <ModalBody>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Form>
                    <div
                      className="alert alert-warning"
                      style={this.state.showAlert ? {} : { display: "none" }}
                    >
                      <strong>Warning!</strong> Nomor KTP atau e-mail anda sudah
                      terdaftar
                    </div>
                    <FormGroup>
                      <Label for="exampleEmail">Nama Lengkap</Label>
                      <Input
                        type="name"
                        name="name"
                        id="name"
                        onChange={e => this.onHandleChange(e)}
                        placeholder="Masukkan Nama Lengkap"
                      />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <FormGroup>
                    <Label for="exampleEmail">No. KTP</Label>
                    <Input
                      type="noKtp"
                      name="noKtp"
                      id="noKtp"
                      onChange={e => this.onHandleChange(e)}
                      placeholder="Masukkan Nomor KTP"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <FormGroup>
                    <Label for="exampleEmail">No. KK</Label>
                    <Input
                      type="noKk"
                      name="noKk"
                      id="noKk"
                      onChange={e => this.onHandleChange(e)}
                      placeholder="Masukkan Nomor KK"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      onChange={e => this.onHandleChange(e)}
                      placeholder="Ketikkan Password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <FormGroup>
                    <Label for="examplePassword">Konfirmasi Password</Label>
                    <Input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      onChange={e => this.onHandleChange(e)}
                      placeholder="Konfirmasi Password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.onHandleSubmit}>
                Daftar
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Login;
