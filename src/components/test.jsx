import React, { Component } from "react";
import QuestionAns from "./question_ans";
import TestConfirm from "./test_confirm";
import { getQuestions, getTestDetails } from "../api/questions";
import { uploadAnswers } from "../api/answers";
import { checkAuth, getStudent } from "../api/authentication";
class Test extends Component {
  state = {
    data: [],
    course: {
      code: "",
      title: "",
    },
    student: {},
    isStarted: false,
    student_answers: [],
    current_answer: {},
    i: 0,
    selectedOption: {},
    remainingTime: 0,
    duration: 60,
    total: 0,
    test_id: "",
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
    if (!current_answer.answer) return;
    if (current_answer.answer.opt_id === "001") {
      const total = this.state.total + data[this.state.i].points;
      this.setState({ total });
      console.log(total);
    }
    const i = a + 1;
    const duration =
      (data[i].isHard ? 120 : 60) + Math.round((remainingTime * 70) / 100);
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
    console.log(student);
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
      console.log("Test id inside finish ", this.props.match.params.id);
      await uploadAnswers(
        student_answers_upload,
        student.roll,
        this.props.match.params.id
      );
      console.log(student_answers_upload);
    } else {
      const total = this.state.total;
      const student_answers_upload = {
        answers: student_answers,
        total: total,
      };
      //console.log("Test id inside finish ", this.props.match.params.id);
      await uploadAnswers(
        student_answers_upload,
        student.roll,
        this.props.match.params.id
      );
    }

    this.props.history.push("/end");
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
    const test_id = this.props.match.params.id;
    this.setState({ test_id });
    try {
      const data = await getQuestions(test_id);
      const test_details = await getTestDetails(test_id);
      const course = {
        code: test_details.coursecode,
        title: test_details.course,
      };
      const email = checkAuth();
      const student = await getStudent(email);
      console.log(student);
      const duration = data[this.state.i].isHard ? 120 : 60;
      this.setState({ data, course, duration, student });
      //console.log("hi", data);
    } catch (ex) {
      window.alert("Something went wrong");
    }
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
      test_id,
    } = this.state;
    const test_length = data.length;
    const current_question = { ...data[i] };
    const data_length = data.length;
    return (
      <div>
        {!isStarted && data.length < 0 && <h1>Loading</h1>}
        {!isStarted && data.length > 0 && (
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
            data={data}
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
