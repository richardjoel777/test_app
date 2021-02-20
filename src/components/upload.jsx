import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { addQuestion, getQuestions } from "../api/questions";
import { uploadAnswers } from "../api/answers";
class Upload extends Component {
  state = {
    fileData: {},
  };
  handleCSV(data) {
    for (let i = 1; i < data.length - 1; i++) {
      addQuestion(data[i]);
    }
  }

  render() {
    return (
      <div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
            }}
          >
            <CSVReader
              onFileLoaded={(data, fileInfo) => this.handleCSV(data)}
              // onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <button onClick={() => getQuestions()}>Click me</button>
        <button
          onClick={() =>
            uploadAnswers(
              { questionId1: "optid", questionId2: "optid2" },
              99,
              "19csr157"
            )
          }
        >
          Upload Answers
        </button>
      </div>
    );
  }
}

export default Upload;
