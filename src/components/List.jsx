import React from "react";
import { Dropdown } from "react-bootstrap";
import "./test_table.css";

function List() {
  return (
    <div className="App-head">
      <Dropdown>
        <Dropdown.Toggle
          variant="primary"
          style={{
            backgroundColor: "rgb(185, 159, 223)",
            color: "black",
          }}
          id="dropdown-basic"
        >
          Class and Sec
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">CSE-A</Dropdown.Item>
          <Dropdown.Item href="#/action-2">CSE-B</Dropdown.Item>
          <Dropdown.Item href="#/action-3">CSE-C</Dropdown.Item>
          <Dropdown.Item href="#/action-3">CSE-D</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default List;
