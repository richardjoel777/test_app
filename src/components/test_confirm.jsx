import React from "react";
import "./test_confirm.css";
const TestConfirm = ({ onClick, course, data_length, student }) => {
  return (
    <div>
      <center>
        <h1 style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:50}}>
          KONGU ENGINEERING COLLEGE
        </h1>
      </center>
      <div className="container-confirm">
        <h2 style={{fontFamily:'"Poppins", sans-serif',fontWeight:600}}>
          {student.name} <br/> {student.roll}
        </h2>
        <div className="card">
          <div className="card-body">
            <p style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:30}}>
             COURSE CODE: {course.code}
            </p>
            <p style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:30}}>
              COURSE NAME: {course.title}
            </p>
            <p style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:30}}>
              TOTAL QUESTION: {data_length}
            </p>
            <p style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:30}}>
              TIMING SCHEDULE
              <br />
              Easy: 60 Secs
              <br />
              Hard: 120 Secs
            </p>
            <button className="button" onClick={onClick}>
              <b style={{fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:30}}>TAKE TEST</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestConfirm;
