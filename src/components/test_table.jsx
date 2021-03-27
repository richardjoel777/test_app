import React, { Component } from "react";
import List from "./List";
import Table1 from "./Table1";
import "./test_table.css";
class TestTable extends Component {
  state = {};
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
              <Table1 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestTable;
