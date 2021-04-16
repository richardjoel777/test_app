import React from "react";
import XLSX from "xlsx";
import { Table, Button } from "react-bootstrap";
import "./test_table.css";
import { Component } from "react";
class Table1 extends Component {
  handleDownload(test) {
    var student_answers = [];
    test.student_answers.map((s) => {
      var obj = {};
      obj["rollno"] = s.student_id;
      obj["marks"] = s.total;
      console.log(JSON.stringify(obj));
      student_answers.push(obj);
    });
    let binary_univers = student_answers;

    let binaryWS = XLSX.utils.json_to_sheet(binary_univers);

    // Create a new Workbook
    var wb = XLSX.utils.book_new();

    // Name your sheet
    XLSX.utils.book_append_sheet(wb, binaryWS, "Binary values");

    // export your excel
    XLSX.writeFile(wb, `${test.test.name} ${test.test.cls}.xlsx`);
  }

  handleClick = (id) => {
    this.props.history.push(`/edit-test/${id}`);
  };
  render() {
    const { tests } = this.props;
    return (
      <div class="table">
        <Table striped bordered hover bg="white">
          <thead>
            <tr>
              <th>Title</th>
              <th>Class</th>
              <th>Date</th>
              <th>Completed</th>
              <th>Test finished</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test) => (
              <tr>
                <td onClick={() => this.handleClick(test.test.test_id)}>
                  {test.test.name}
                </td>
                <td>{test.test.cls}</td>
                <td>{test.test.datetime.toDate().toDateString()}</td>
                <td>{test.student_answers.length}</td>
                <td>{test.isCompleted ? "Yes" : "No"}</td>
                <Button
                  variant="success"
                  onClick={() => this.handleDownload(test)}
                >
                  Download
                </Button>{" "}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Table1;
