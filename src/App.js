import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import Test from "./components/test";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          {/* <Route path="/" component={Login}></Route> */}
          <Route path="/" component={Test}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
