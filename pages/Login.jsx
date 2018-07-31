import React, { Component } from "react";
import { postApi } from '../middleware/api';
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
import word from "../word.png";
import vote from "../evoting.png";
import peta from "../B2.png";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      noKtp: '',
      noKk: '',
      email: '',
      password: '',
      confirmpassword: '',

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
      [e.target.id]: e.target.value,
    });
    console.log(this.state.name)
  }

  onHandleChangeLogin(e) {
    
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(this.state.noKtp)
  }

  async onHandleSubmit() {
    const {name, noKtp, noKk, email, password, confirmpassword} = this.state;
    const {status} = await postApi('/signup', this.state);
    console.log(status);

    if(status === 200){
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  async onHandleSubmitLogin() {
    const {noKtp, noKk, password} = this.state;
    const {status} = await postApi('/login', this.state);
    console.log(status);

    if(status === 200){
        this.props.history.push('/home');  
    }
    
  }

  render() {
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
            <p className="text-right">Anda belum login.</p>
            <div className="text-center">
              <img src={word} className="img-fluid" alt="word" style={{paddingTop:'30px'}}/>
              <p className="text-muted">
                Silahkan Daftar terlebih dahulu untuk membuat Password
              </p>
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
                    <Label for="examplePassword">No. KK</Label>
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
              <Row>
               
                  <Col sm="12" md={{ size: 1, offset: 4 }}>
                    <Button color="primary" onClick={this.onHandleSubmitLogin}>Login</Button>
                  </Col>
                  <Col md="2">
                    <Button color="danger" onClick={this.toggle}>Daftar</Button>
                  </Col>
          
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <footer className="footer">
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
                    <Label for="examplePassword">No. KTP</Label>
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
                    <Label for="examplePassword">No. KK</Label>
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
                    <Label for="examplePassword">e-Mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={e => this.onHandleChange(e)}
                      placeholder="Masukkan Alamat e-Mail"
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
