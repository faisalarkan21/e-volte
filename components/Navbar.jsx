import React from 'react';
import logo from '../evoting.png';
import { Link } from 'react-router-dom';
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
  DropdownItem } from 'reactstrap';

export default class Nav_bar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img src={logo} className="img-fluid" alt="logo" style={{width: '150px', height: '50px'}}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="p-2 text-dark" to="/home">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="p-2 text-dark" to="/vote">Vote</Link>
              </NavItem>
              <NavItem>
                <Link className="p-2 text-dark" to="/hasil">Hasil</Link>
              </NavItem>
              
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}