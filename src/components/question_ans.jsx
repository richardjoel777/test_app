import React, { Component } from "react";
import shuffle from "shuffle-array";
import "./question_ans.css";
class Question_Ans extends Component {
  state = {
    answers_shuffled: [],
  };
  componentDidMount() {
    const answers_shuffled = shuffle(this.props.answers);
    console.log(this.props.current_answer);
    this.setState({ answers_shuffled });
  }
  render() {
    const {
      user,
      duration,
      handleNext,
      data_length,
      data,
      i,
      handleSubmit,
      current_question,
      current_answer,
      selectedOption,
      handleSelect,
    } = this.props;

    return (
      <div>
        <div className="info">
          <div className="info-left">
            <h2 style={{textAlign:'left',fontFamily:'"Poppins", sans-serif',fontWeight:500,fontSize:40}}>
              {user.name} <br />
              {user.roll}
            </h2>
          </div>
          <div className="timer">
            <center>
              <p id="countdown">{duration}</p>
            </center>
          </div>
          {i < data_length - 1 && (
            <div className="info-right">
              <a
                className="next"
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  handleNext(i);
                  const ans = shuffle(data[i + 1].options);
                  this.setState({ answers_shuffled: ans });
                }}
              >
                Next &raquo;
              </a>
            </div>
          )}
          {i == data_length - 1 && (
            <div className="info-right">
              <a
                className="next"
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={handleSubmit}
              >
                  SUBMIT
              </a>
            </div>
          )}
        </div>
        <div className="body">
          <div className="row">
            <div className="column left">
              <h2 style={{textAlign:'left',fontFamily: '"Poppins", sans-serif',fontWeight:600}}>Q.NO {i + 1}</h2>
              <p style={{fontFamily:'"Poppins", sans-serif',fontWeight:400,fontSize:30,textAlign:'left'}}>{current_question.question_txt}</p>
            </div>
            <div className="column right">
              <h2 style={{textAlign:'left',fontFamily:'"Poppins", sans-serif',fontWeight:600,padding:20}}>OPTIONS</h2>
              {this.state.answers_shuffled.map((item) => (
                <div
                  className="col-3"
                  key={item.opt_id}
                  onClick={() => handleSelect(item, current_question)}
                >
                  <input
                    name="option"
                    id="cb1"
                    type="radio"
                    className="radio"
                    checked={
                      selectedOption.opt_id === item.opt_id &&
                      current_answer.question_id ===
                        current_question.question_id
                    }
                    onChange={() => handleSelect(item, current_question)}
                  ></input>
                  <label
                    htmlFor="cd1"
                    style={{
                      fontSize: 25,
                      marginLeft:10,
                      fontWeight: 500,
                      fontFamily:'"Poppins", sans-serif',
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
    );
  }
}

export default Question_Ans;
