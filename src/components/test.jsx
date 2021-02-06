import React, { Component } from "react";
import "react-countdown-circle-timer";
import "./test.css";
import Test_Confirm from "./test_confirm";

class Test extends Component {
  state = {
    data: [
      {
        _id: "1000",
        question_txt: "What is the capital of india?",
        type: "1",
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
        question_txt: "Who is our CM",
        type: "0",
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
    course: {
      code: "18ITC31",
      title: "Digital principle and design",
    },
    student: {
      id: "19CSR157",
      name: "S.PRIYADHARSHINI",
    },
    isStarted: false,
    student_answers: [],
    current_answer: {},
    i: 0,
    selectedOption: {},
    remainingTime: 0,
    duration: 120,
  };

  handleNext = (a) => {
    if (this.state.i + 1 >= this.state.data.length) {
      console.log("Exam Finished");
    } else {
      const i = a + 1;
      const duration = 120 + Math.round((this.state.remainingTime * 70) / 100);
      this.setState({ duration, i });
    }

    const student_answers =
      this.state.student_answers === []
        ? [this.state.current_answer]
        : [...this.state.student_answers, this.state.current_answer];
    this.setState({ student_answers });
    console.log(student_answers);
  };
  handleSelect = (answer, question) => {
    const selectedOption =
      answer.opt_id === this.state.selectedOption.opt_id ? {} : { ...answer };
    const current_answer = this.mapToCurrentAnswer(answer, question);
    this.setState({ selectedOption, current_answer });
  };

  handleSubmit = () => {
    const student_answers =
      this.state.student_answers === []
        ? [this.state.current_answer]
        : [...this.state.student_answers, this.state.current_answer];
    this.setState({ student_answers });
    console.log(student_answers);
  };

  handleTakeTest = () => {
    const isStarted = true;
    this.setState({ isStarted });
    setTimeout(() => this.handleNext(this.state.i), this.state.duration * 1000);
    setInterval(this.updateCount, 1000);
  };

  updateCount = () => {
    const duration = this.state.duration - 1;
    this.setState({ duration, remainingTime: duration });
  };

  mapToCurrentAnswer(answer, question) {
    return {
      _id: question._id,
      question_txt: question.question_txt,
      answer: answer,
    };
  }

  render() {
    const {
      data,
      i,
      selectedOption,
      duration,
      isStarted,
      course,
      student,
    } = this.state;
    const test_length = data.length;
    const current_question = { ...data[i] };
    const answers = [...current_question.answers];
    return (
      <div>
        {!isStarted && (
          <Test_Confirm
            course={course}
            length={test_length}
            student={student}
            onClick={this.handleTakeTest}
          />
        )}
        {isStarted && (
          <div>
            <div className="info">
              <div className="info-left">
                <h2>
                  OVIYA D <br />
                  19CSR130
                </h2>
              </div>
              <div className="timer">
                <center>
                  <p id="countdown">{duration}</p>
                </center>
              </div>
              {i < data.length - 1 && (
                <div className="info-right">
                  <a
                    className="next"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    onClick={() => this.handleNext(i)}
                  >
                    Next &raquo;
                  </a>
                </div>
              )}
              {i == data.length - 1 && (
                <div className="info-right">
                  <a
                    className="next"
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </a>
                </div>
              )}
            </div>
            <div className="body">
              <div className="row">
                <div className="column left">
                  <h2>Q.NO {i + 1}</h2>
                  <p>{current_question.question_txt}</p>
                </div>
                <div className="column right">
                  <h2>Options</h2>
                  {answers.map((item) => (
                    <div
                      className="col-3"
                      key={item.opt_id}
                      onClick={() => this.handleSelect(item, current_question)}
                    >
                      <input
                        name="option"
                        id="cb1"
                        type="radio"
                        className="radio"
                        checked={selectedOption.opt_id === item.opt_id}
                      ></input>
                      <label
                        htmlFor="cd1"
                        style={{
                          fontSize: 20,
                          cursor: "pointer",
                          WebkitTouchCallout: "none",
                          WebkitUserSelect: "none",
                          KhtmlUserSelect: "none",
                          MozUserSelect: "none",
                          msUserSelect: "none",
                          userSelect: "none",
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
        )}
      </div>
    );
  }
}

export default Test;
