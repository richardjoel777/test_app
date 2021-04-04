import React from "react";
import { Link } from "react-router-dom";
import "./not_found.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin" />
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <Link to="/">
            <button className="btn btn-primary ">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
