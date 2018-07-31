import React, { Component } from "react";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

class Notfound extends Component  {
  render() {
    return (
      <div className="container text-center error-page" style={{paddingTop:'100px'}}>
        <h2 className="headline text-yellow"> 404</h2>

        <div className="error-content">
          <h3 style={{color:'red'}}><i className="fa fa-warning" style={{color:'red'}}></i> Oops! Page not found.</h3>

          <p>
            We could not find the page you were looking for.
            Meanwhile, you may <Link to="/">return to dashboard</Link> or try using the search form.
          </p>
        </div>
      </div>
    );
  }
}


export default Notfound;
