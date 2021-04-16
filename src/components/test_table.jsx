import React, { Component } from "react";
import { checkAuth } from "../api/authentication";
import { getTests } from "../api/questions";
import { Link } from "react-router-dom";
import List from "./List";
import Table1 from "./Table1";
import "./test_table.css";
class TestTable extends Component {
  state = {
    tests: [],
  };

  async componentDidMount() {
    const email = checkAuth();
    const tests = await getTests(email);
    this.setState({ tests });
    console.log("final list", tests);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(45, 40, 54)",
        }}
      >
        <div className="App">
          <div className="App-header">
            <div class="list">
              <List />
            </div>
            <div class="Table">
              <Table1 tests={this.state.tests} />
            </div>
          </div>
        </div>
        <Link to="/upload">
          <button className="btn btn-primary">Create New Test</button>
        </Link>
      </div>
    );
  }
}

export default TestTable;
