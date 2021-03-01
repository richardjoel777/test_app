import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class TestsTable extends Component {
  render() {
    const { tests, columns } = this.props;
    return <Table tests={tests} columns={columns} />;
  }
}
export default TestsTable;
