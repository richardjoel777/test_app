import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <switch>
          <Route path="/" component={Login}></Route>
        </switch>
      </main>
    );
  }
}

export default App;
