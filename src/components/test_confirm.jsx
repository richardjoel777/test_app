import React from "react";
import "./test_confirm.css";
const TestConfirm = ({ onClick, course, test_length, student }) => {
  return (
    <div>
      <center>
        <h1>
          <b>KONGU ENGINEERING COLLEGE </b>
        </h1>
      </center>
      <div className="container-confirm">
        <h2>
          {student.name} , {student.id}
        </h2>
        <div className="card">
          <div className="card-body">
            <p>
              <b>COURSE CODE: {course.code}</b>
            </p>
            <p>
              <b>COURSE NAME: {course.title}</b>
            </p>
            <p>
              <b>TOTAL QUESTION: {test_length}</b>
            </p>
            <p>
              <b>TIMING SCHEDULE</b>
              <br />
              Easy: 60 Secs
              <br />
              Hard: 120 Secs
            </p>
            <button className="button" onClick={onClick}>
              <b>TAKE TEST</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestConfirm;
