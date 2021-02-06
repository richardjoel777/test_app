import React from "react";
//import "bootstrap/dist/css/bootstrap.css";
const Test_Confirm = ({ onClick, course, test_length, student }) => {
  return (
    <div>
      <center>
        <p>KONGU ENGINEERING COLLEGE</p>
      </center>
      <div class="container">
        <h5>
          {student.name} , {student.id}
        </h5>
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              <b>COURSE CODE: {course.code}</b>
            </p>
            <p class="card-text">
              <b>COURSE NAME: {course.title}</b>
            </p>
            <p class="card-text">
              <b>TOTAL QUESTION: {test_length}</b>
            </p>
            <p class="card-text">
              <b>TIMING SCHEDULE</b> <br /> Easy: 60 Secs
              <br /> Hard: 120 Secs
            </p>
            <button class="btn btn-primary" onClick={onClick}>
              <b>TAKE TEST</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test_Confirm;
