import React from "react";
import "./question_ans.css";
const Question_Ans = ({
  user,
  duration,
  handleNext,
  data_length,
  i,
  handleSubmit,
  current_question,
  answers,
  selectedOption,
  handleSelect,
}) => {
  return (
    <div>
      <div className="info">
        <div className="info-left">
          <h2>
            {user.name} <br />
            {user.id}
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
              onClick={() => handleNext(i)}
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
                onClick={() => handleSelect(item, current_question)}
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
  );
};

export default Question_Ans;
