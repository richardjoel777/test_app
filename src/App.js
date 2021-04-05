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
import NotFound from "./components/not-found";
import UploadPage from "./components/upload_page";
import DatePage from "./components/date";
import Home from "./components/home";
import ProtectedRoute from "./components/protectedRoute";
import FacultyProtectedRoute from "./components/facultyProtectedRoute";
import { checkAuth } from "./api/authentication";
class App extends Component {
  componentDidMount() {
    console.log(this.user);
  }
  user = checkAuth();
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/test/:id" component={Test} />
        <FacultyProtectedRoute path="/upload" component={UploadPage} />
        {/* <FacultyProtectedRoute path="edit-test/:id" component={FacultyTest} /> */}
        <ProtectedRoute path="/profile" component={Profile} />
        <FacultyProtectedRoute path="/tests" component={TestTable} />
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/upload" component={Upload}></Route> */}
        {/* <Route path="/upload_test" component={UploadPage}></Route> */}
        <Route path="/end" exact to component={TestEnd}></Route>
        <FacultyProtectedRoute
          path="/test_faculty/:id"
          component={FacultyTest}
        ></FacultyProtectedRoute>
        {/* <Route path="/tests" to component={TestList}></Route> */}
        <Route path="/not-found" component={NotFound}></Route>
        {/* <Route path="/profile" to component={Profile}></Route>
        <Route path="/tests" to component={TestTable}></Route> */}
        {/* <Route path="/date" to component={DatePage}></Route> */}
        <Route exact path="/" to component={Home}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    );
  }
}

export default App;
