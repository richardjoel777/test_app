import React from "react";
import { Table, Button } from "react-bootstrap";
import "./test_table.css";
function Table1() {
  return (
    <div class="table">
      <Table striped bordered hover bg="white">
        <thead>
          <tr>
            <th>Title</th>
            <th>Class</th>
            <th>Date</th>
            <th>Assigned</th>
            <th>Completed</th>
            <th>Test finished</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tutorial 1</td>
            <td>II-CSE-A</td>
            <td>23/3/2021</td>
            <td>53</td>
            <td>56</td>
            <td>yes</td>
            <Button variant="success">Download</Button>{" "}
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default Table1;
