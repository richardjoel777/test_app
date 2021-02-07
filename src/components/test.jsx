import React, { Component } from "react";
import Question_Ans from "./question_ans";
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
    const data_length = data.length;
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
          <Question_Ans
            user={student}
            duration={duration}
            data_length={data_length}
            i={i}
            handleSubmit={this.handleSubmit}
            current_question={current_question}
            answers={answers}
            selectedOption={selectedOption}
            handleSelect={this.handleSelect}
            handleNext={this.handleNext}
          />
        )}
      </div>
    );
  }
}

export default Test;
