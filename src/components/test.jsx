import React, { Component } from "react";
import "react-countdown-circle-timer";
import "./test.css";
class Test extends Component {
  state = {
    data: [
      {
        _id: "1000",
        question: "What is the capital of india?",
        answers: [
          {
            opt_id: "001",
            opt_text: "Delhi",
          },
          {
            opt_id: "002",
            opt_text: "Mumbai",
          },
          {
            opt_id: "003",
            opt_text: "Bihar",
          },
          {
            opt_id: "004",
            opt_text: "Chennai",
          },
        ],
      },
      {
        _id: "2000",
        question: "Who is our CM",
        answers: [
          {
            opt_id: "011",
            opt_text: "Jaya",
          },
          {
            opt_id: "012",
            opt_text: "Stalin",
          },
          {
            opt_id: "013",
            opt_text: "OPS",
          },
          {
            opt_id: "014",
            opt_text: "EPS",
          },
        ],
      },
    ],
    i: 0,
    selectedOption: {},
    startTime: 0,
    remainingTime: 0,
    duration: 120,
  };

  handleNext = (a) => {
    if (this.state.i + 1 >= this.state.data.length) {
      console.log("Exam Finished");
    } else {
      const i = a + 1;
      this.setState({ duration: 120, i });
    }
  };
  handleSelect = (value) => {
    const selectedOption =
      value.opt_id === this.state.selectedOption.opt_id ? {} : { ...value };
    this.setState({ selectedOption });
  };

  updateCount = () => {
    const duration = this.state.duration - 1;
    this.setState({ duration });
  };

  componentDidMount() {
    setTimeout(() => this.handleNext(this.state.i), 120000);
    setInterval(this.updateCount, 1000);
  }
  render() {
    const { data, i, selectedOption, remainingTime, duration } = this.state;
    const current_question = data[i];
    const answers = [...current_question.answers];
    console.log(duration, remainingTime);
    return (
      <div>
        <div className="info">
          <div className="info-left">
            <h2>OVIYA D</h2>
            <h2>19CSR130</h2>
          </div>
          <div className="timer">
            <center>
              <p id="countdown">{duration}</p>
            </center>
          </div>
          <div className="info-right">
            <a className="next" onClick={() => this.handleNext(i)}>
              Next &raquo;
            </a>
          </div>
        </div>
        <div classNameName="body">
          <div className="row">
            <div className="column left">
              <h2>Q.NO {i + 1}</h2>
              <p>{current_question.question}</p>
            </div>
            <div className="column right">
              <h2>Options</h2>
              {answers.map((item) => (
                <div className="col-3" onClick={() => this.handleSelect(item)}>
                  <input
                    name="option"
                    id="cb1"
                    type="radio"
                    className="radio"
                    checked={selectedOption.opt_id === item.opt_id}
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
                    {item.opt_text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
