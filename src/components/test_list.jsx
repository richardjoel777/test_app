import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "./common/listGroup";
import TestsTable from "./testsTable";
import "./test_lists.css";
class TestList extends Component {
  state = {
    selectedTest: null,
    test_group: ["All", "II-CSE-C", "II-CSE-D", "III-CSE-A"],
    tests: [
      {
        id: "001",
        title: "tutorial 1",
        date: "20-02-2021",
        assigned: 58,
        completed: 56,
        isCompleted: true,
        test_group: "II-CSE-C",
      },
      {
        id: "002",
        title: "tutorial 2",
        date: "20-03-2021",
        assigned: 55,
        completed: 50,
        isCompleted: true,
        test_group: "II-CSE-D",
      },
      {
        id: "003",
        title: "tutorial 3",
        date: "01-03-2021",
        assigned: 60,
        completed: 56,
        isCompleted: false,
        test_group: "III-CSE-A",
      },
    ],
    columns: [
      {
        label: "Title",
        path: "title",
        // content: (test) => <Link to={`/tests/${test.id}`}>{test.title}</Link>,
      },
      { label: "Class", path: "test_group" },
      { label: "Date", path: "date" },
      { label: "Assigned", path: "assigned" },
      { label: "Completed", path: "completed" },
      { label: "Test Finished", path: "isCompleted" },
      {
        path: "delete",
        content: (test) => (
          <button
            onClick={() => this.handleDownload(test)}
            className="btn btn-success btn-sm"
          >
            Download
          </button>
        ),
      },
    ],
  };
  handleTestSelect = (group) => {
    this.setState({ selectedTest: group });
  };
  getPageData = () => {
    const { tests: allTests, selectedTest } = this.state;
    let filtered = allTests;
    if (selectedTest && selectedTest != "All")
      filtered = allTests.filter((m) => m.test_group === selectedTest);
    return filtered;
  };
  handleDownload(test) {
    console.log("Downloaded", test);
  }
  render() {
    const tests = this.getPageData();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.test_group}
            onTestSelect={this.handleTestSelect}
            selectedTest={this.state.selectedTest}
          />
        </div>
        <div className="col">
          <TestsTable tests={tests} columns={this.state.columns} />
        </div>
      </div>
    );
  }
}

export default TestList;
