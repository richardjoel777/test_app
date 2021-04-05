import React from "react";
import XLSX from "xlsx";
import { Table, Button } from "react-bootstrap";
import "./test_table.css";
const Table1 = ({ tests }) => {
  function handleDownload(test) {
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
              <td>{test.test.name}</td>
              <td>{test.test.cls}</td>
              <td>{test.test.datetime.toDate().toDateString()}</td>
              <td>{test.student_answers.length}</td>
              <td>{test.isCompleted ? "Yes" : "No"}</td>
              <Button variant="success" onClick={() => handleDownload(test)}>
                Download
              </Button>{" "}
            </tr>
          ))}
          {/* <tr>
            <td>tutorial 2</td>
            <td>II-CSE-B</td>
            <td>24/3/2021</td>
            <td>53</td>
            <td>56</td>
            <td>yes</td>
            <Button variant="success">Download</Button>{" "}
          </tr>
          <tr>
            <td>tutorial 3</td>
            <td>II-CSE-C</td>
            <td>25/3/2021</td>
            <td>53</td>
            <td>56</td>
            <td>yes</td>
            <Button variant="success">Download</Button>{" "}
          </tr>
          <tr>
            <td>tutorial 4</td>
            <td>II-CSE-D</td>
            <td>26/3/2021</td>
            <td>53</td>
            <td>56</td>
            <td>yes</td>
            <Button variant="success">Download</Button>{" "}
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};
export default Table1;
