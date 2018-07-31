import React, { Component } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import LoginAdmin from "./pages/LoginAdmin.jsx";
import Home from "./pages/Home.jsx";
import Vote from "./pages/Vote.jsx";
import Hasil from "./pages/Hasil.jsx";
import Notfound from "./pages/404.jsx";
import { PrivateRoute } from "./middleware/middleware-route";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {



  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/loginadmin" component={LoginAdmin} />
              <Route path="/404" component={Notfound} />
              <PrivateRoute
                roles={["user", "admin" ]}
                exact
                path="/home"
                component={Home}
              />
              <PrivateRoute roles={["user","admin"]} path="/vote" component={Vote} />
              <PrivateRoute
                roles={["user","admin"]}
                path="/hasil"
                component={Hasil}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
