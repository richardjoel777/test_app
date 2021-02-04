import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Test from "./components/test";
import Upload from "./components/upload";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/upload" component={Upload}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
