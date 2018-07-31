import React, { Component } from "react";
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
import LA from "../LA.png";
import vote from "../evoting.png";

class LoginAdmin extends Component {
  render() {
    return (
      <div>
        <Container>
          <img
            src={vote}
            className="img-fluid"
            alt="vote"
            style={{
              width: "170px",
              height: "auto",
              paddingLeft: "20px",
              paddingBottom: "100px"
            }}
          />
          <img
            src={LA}
            className="img-fluid"
            alt="loginAdmin"
            style={{
              width: "250px",
              height: "auto",
              paddingTop: "150px",
              marginLeft: "260px"
            }}
          />
          <Row>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
              <Form style={{ paddingTop: "30px" }}>
                <FormGroup>
                  <Label for="exampleEmail">Username</Label>
                  <Input
                    type="username"
                    name="username"
                    id="username"
                    onChange={e => this.onHandleChangeLogin(e)}
                    placeholder="Masukkan Username"
                  />
                </FormGroup>
              </Form>
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
            <Col sm="12" md={{ size: 4, offset: 4 }}>
              <Button style={{ marginLeft: "135px" }} color="primary">
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginAdmin;
