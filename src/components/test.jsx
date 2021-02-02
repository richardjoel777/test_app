import React, { Component } from "react";
import "./test.css";

class Test extends Component {
  state = {
    selectedOption: null,
  };

  handleSelect = (value) => {
    const selectedOption = value === this.state.selectedOption ? null : value;
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div classNameName="body">
        <div className="info">
          <div className="info-left">
            <h2>OVIYA D,19CSR130</h2>
          </div>
          <div className="timing">
            <center>
              <h1 id="count">00:00</h1>
            </center>
          </div>
          <div className="info-right">
            <a href="#" className="next">
              Next &raquo;
            </a>
          </div>
        </div>

        <div className="row">
          <div className="column left">
            <h2>Q.NO 1</h2>
            <p>
              Start by doing what's necessary; then do what's possible; and
              suddenly you are doing the impossible.If a superior give any order
              to one who is under him which is against that man's conscience,
              although he do not obey it yet he shall not be dismissed.has its
              foot on the tail of a mouse and you say that you are neutral, the
              mouse will not appreciate your neutrality.Start by doing what's
              necessary; then do what's possible;Start by doing what's
              necessary; then do what's possible; and suddenly you are doing the
              impossible.If a superior give any order to one who is under him
              which is against that man's conscience, although he do not obey it
              yet he shall not be dismissed.has its foot on the tail of a mouse
              and you say that you are neutral, the mouse will not appreciate
              your neutrality.Start by doing what's necessary; then do what's
              possible;Start by doing what's necessary; then do what's possible;
              and suddenly you are doing the impossible.If a superior give any
              order to one who is under him which is against that man's
              conscience, although he do not obey it yet he shall not be
              dismissed.has its foot on the tail of a mouse and you say that you
              are neutral, the mouse will not appreciate your neutrality.Start
              by doing what's necessary; then do what's possible;Start by doing
              what's necessary; then do what's possible; and suddenly you are
              doing the impossible.If a superior give any order to one who is
              under him which is against that man's conscience, although he do
              not obey it yet he shall not be dismissed.has its foot on the tail
              of a mouse and you say that you are neutral, the mouse will not
              appreciate your neutrality.Start by doing what's necessary; then
              do what's possible;
            </p>
          </div>
          <div className="column right">
            <h2>Options</h2>
            <div className="col-3" onClick={() => this.handleSelect("1")}>
              <input
                name="option"
                id="cb1"
                type="radio"
                className="radio"
                checked={selectedOption === "1"}
              ></input>
              <label
                for="cd1"
                style={{
                  "font-size": 20,
                  cursor: "pointer",
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                }}
              >
                Some text..
              </label>
            </div>

            <div className="col-3" onClick={() => this.handleSelect("2")}>
              <input
                name="option"
                id="cb2"
                type="radio"
                className="radio"
                checked={selectedOption === "2"}
              ></input>
              <label
                for="cd2"
                style={{
                  "font-size": 20,
                  cursor: "pointer",
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                }}
              >
                Some text..
              </label>
            </div>

            <div className="col-3" onClick={() => this.handleSelect("3")}>
              <input
                name="option"
                id="cb3"
                type="radio"
                className="radio"
                checked={selectedOption === "3"}
              ></input>
              <label
                for="cd3"
                style={{
                  "font-size": 20,
                  cursor: "pointer",
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                }}
              >
                Some text..
              </label>
            </div>
            <div className="col-3" onClick={() => this.handleSelect("4")}>
              <input
                name="option"
                id="cb5"
                type="radio"
                className="radio"
                checked={selectedOption === "4"}
              ></input>
              <label
                for="cd5"
                style={{
                  "font-size": 20,
                  cursor: "pointer",
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "none",
                  "-ms-user-select": "none",
                  "user-select": "none",
                }}
              >
                Some text..
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
