import React, { Component } from "react";
import QuestionAns from "./question_ans";
import TestConfirm from "./test_confirm";
import { getQuestions } from "../api/questions";
import { uploadAnswers } from "../api/answers";

class Test extends Component {
  state = {
    data: [
      // {
      //   _id: "1000",
      //   question_txt: "What is the capital of india?",
      //   type: "1",
      //   answers: [
      //     {
      //       opt_id: "001",
      //       opt_text: "Delhi",
      //     },
      //     {
      //       opt_id: "002",
      //       opt_text: "Mumbai",
      //     },
      //     {
      //       opt_id: "003",
      //       opt_text: "Bihar",
      //     },
      //     {
      //       opt_id: "004",
      //       opt_text: "Chennai",
      //     },
      //   ],
      // },
      // {
      //   _id: "2000",
      //   question_txt: "Who is our CM",
      //   type: "0",
      //   answers: [
      //     {
      //       opt_id: "011",
      //       opt_text: "Jaya",
      //     },
      //     {
      //       opt_id: "012",
      //       opt_text: "Stalin",
      //     },
      //     {
      //       opt_id: "013",
      //       opt_text: "OPS",
      //     },
      //     {
      //       opt_id: "014",
      //       opt_text: "EPS",
      //     },
      //   ],
      // },
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
    total: 0,
    answers_upload: {},
  };

  // shuffleArray(item) {
  //   let array = item.options;
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }

  handleNext = (a) => {
    const { data, current_answer, remainingTime } = this.state;
    if (current_answer.answer.opt_id === "001") {
      const total = this.state.total + data[this.state.i].points;
      this.setState({ total });
      console.log(total);
    }
    const i = a + 1;
    const duration = 120 + Math.round((remainingTime * 70) / 100);
    this.setState({ duration, i });
    const student_answers =
      this.state.student_answers === []
        ? [current_answer]
        : [...this.state.student_answers, current_answer];
    this.setState({ student_answers, selectedOption: {} });

    // console.log(student_answers, this.state.current_answer);
  };
  handleSelect = (answer, question) => {
    const selectedOption =
      answer.opt_id === this.state.selectedOption.opt_id ? {} : { ...answer };
    const current_answer = this.mapToCurrentAnswer(answer, question);
    this.setState({ selectedOption, current_answer });
  };

  handleSubmit = async () => {
    const { current_answer, i, data, student } = this.state;
    const student_answers =
      this.state.student_answers === []
        ? [current_answer]
        : [...this.state.student_answers, current_answer];
    this.setState({ student_answers });
    console.log(student_answers);
    if (current_answer.answer.opt_id === "001") {
      const total = this.state.total + data[i].points;
      this.setState({ total });
      console.log(total);
      const student_answers_upload = {
        answers: student_answers,
        total: total,
        user: student,
      };
      console.log(student_answers_upload);
    } else {
      const total = this.state.total;
      const student_answers_upload = {
        answers: student_answers,
        total: total,
        user: student,
      };
      await uploadAnswers(student_answers_upload, student.id);
    }

    // console.log(student_answers);
  };

  handleTakeTest = () => {
    const { i, duration } = this.state;
    const isStarted = true;
    this.setState({ isStarted });
    setTimeout(() => this.handleNext(i), duration * 1000);
    setInterval(this.updateCount, 1000);
  };

  updateCount = () => {
    const duration = this.state.duration - 1;
    this.setState({ duration, remainingTime: duration });
  };

  mapToCurrentAnswer(answer, question) {
    return {
      question_id: question.question_id,
      question_txt: question.question_txt,
      answer: answer,
    };
  }

  async componentDidMount() {
    const data = await getQuestions();
    this.setState({ data });
    // console.log(data);
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
      current_answer,
    } = this.state;
    const test_length = data.length;
    const current_question = { ...data[i] };
    const data_length = data.length;
    return (
      <div>
        {!isStarted && (
          <TestConfirm
            course={course}
            length={test_length}
            student={student}
            onClick={this.handleTakeTest}
          />
        )}
        {isStarted && (
          <QuestionAns
            user={student}
            duration={duration}
            data_length={data_length}
            i={i}
            handleSubmit={this.handleSubmit}
            current_question={current_question}
            current_answer={current_answer}
            answers={current_question.options}
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
