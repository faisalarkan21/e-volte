import React from "react";
import logo from "../evoting.png";
import { Link } from "react-router-dom";
import { tokenAuth } from "../middleware/cookies-manager";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem
} from "reactstrap";

class Nav_bar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isOpen: false
    };
  }

  // componentWillMount(){
  //   console.log(nextProps);
  // }

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  // }

  handleLogout() {
    tokenAuth.eraseCookies();
    this.props.history.push("/");
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { userData } = this.props;
    // console.log(userData);

    return (
      <div>
        <Navbar color="white" light expand="md">
          <div className="container">
            <NavbarBrand href="/">
              <img
                src={logo}
                className="img-fluid"
                alt="logo"
                style={{ width: "150px", height: "50px" }}
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="p-2 text-dark" to="/home">
                    Home
                  </Link>
                </NavItem>
                
                <NavItem>
                  <Link className="p-2 text-dark" to="/vote">
                    Vote
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="p-2 text-dark" to="/hasil">
                    Hasil
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className="p-0 text-dark">
                    {userData.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={this.handleLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Nav_bar);
