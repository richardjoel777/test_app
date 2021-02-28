import React, { Component } from "react";
import { addQuestion, getQuestions } from "../api/questions";
import "./faculty_test.css";
class FacultyTest extends Component {
  state = {
    data: [],
    new_opt: "",
    changeClicked: false,
    current_index: 0,
  };

  onSubmit = async (e, item) => {
    e.preventDefault();
    const new_opt = this.state.new_opt;
    let data = [...this.state.data];
    const index = data.indexOf(item);
    data[index].options[0].opt_text = new_opt;
    this.setState({ data, changeClicked: false });
    //await addQuestion(data);
  };

  handleChange = (item) => {
    const data = this.state.data;
    const index = data.indexOf(item);
    this.setState({ changeClicked: true, current_index: index });
  };

  handleOpt = (event) => {
    this.setState({ new_opt: event.target.value });
  };

  async componentDidMount() {
    const data = await getQuestions();
    console.log(data);
    this.setState({ data });
  }
  render() {
    const { data, changeClicked } = this.state;
    return (
      <div>
        <div className="info">
          <center>
            <h1>KONGU ENGINEERING COLLEGE</h1>
          </center>
          <div className="info-left">
            <h2>
              K.DINESH
              <br />
              OBJECT ORIENTED PROGRAMMING
              <br />
              18CST33
            </h2>
          </div>
          <div className="timing">
            <h2>NO OF QUESTIONS : 15</h2>
            <h2>DURATION : 30 MINS</h2>
          </div>
        </div>

        {data.map((item) => (
          <div className="row">
            <div
              className="column left"
              style={{ backgroundColor: "rgb(182, 185, 229)" }}
            >
              <h2>Q.NO 1</h2>
              <p>{item.question_txt}</p>
              <div
                className="column right"
                style={{ backgroundColor: "rgb(56, 52, 85)" }}
              >
                <h2>Options</h2>
                {item.options.map((opt) => (
                  <div>
                    <div
                      className={opt.opt_id === "001" ? "col-3 ans" : "col-3"}
                      style={{ marginBottom: "30px" }}
                    >
                      <label htmlFor="cd1" style={{ fontSize: "17px" }}>
                        {opt.opt_text}
                      </label>
                    </div>
                    <br />
                  </div>
                ))}
                <button
                  className="button button4"
                  onClick={() => this.handleChange(item)}
                >
                  Change
                </button>
                {changeClicked &&
                  item.question_id ===
                    this.state.data[this.state.current_index].question_id && (
                    <form onSubmit={(e) => this.onSubmit(e, item)}>
                      <input
                        type="text"
                        onChange={this.handleOpt}
                        placeholder="Enter new correct option"
                        className="textarea"
                      ></input>
                      <button type="submit" className="button button4">
                        Submit
                      </button>
                    </form>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FacultyTest;
