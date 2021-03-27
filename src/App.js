import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Test from "./components/test";
import Upload from "./components/upload";
import TestEnd from "./components/test_end";
import FacultyTest from "./components/faculty_test";
import TestList from "./components/test_list";
import Profile from "./components/profile";
import "./App.css";
import TestsTable from "./components/testsTable";
import TestTable from "./components/test_table";
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
          <Route path="/end" exact to component={TestEnd}></Route>
          <Route path="/test_faculty" component={FacultyTest}></Route>
          <Route path="/tests" to component={TestList}></Route>
          <Route path="/profile" to component={Profile}></Route>
          <Route path="/test_table" to component={TestTable}></Route>
        </Switch>
      </main>
    );
  }
}

export default App;
