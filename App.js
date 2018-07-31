import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Vote from './pages/Vote.jsx';
import Hasil from './pages/Hasil.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>     
        <Router>
          <div>
            <Route exact path="/" component={Login} /> 
            <Route exact path="/home" component={Home} />
            <Route path="/vote" component={Vote} />
            <Route path="/hasil" component={Hasil} />
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
