import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Login}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
