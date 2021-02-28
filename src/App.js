import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Test from "./components/test";
import Upload from "./components/upload";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("I'm the user");
    console.log(this.user);
  }
  user = localStorage.getItem("user");
  render() {
    return (
      <main>
        <Switch>
          <Route path="/test" component={Test}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/upload" component={Upload}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
