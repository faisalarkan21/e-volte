import React, { Component } from 'react';
import Nav_bar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Home extends Component {
    render() {
      return (
        <div>
          <Nav_bar />
          <Footer />
        </div>
      );
    }
  }
  
  export default Home