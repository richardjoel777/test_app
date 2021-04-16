import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { addQuestion, getQuestions, addTestDetails } from "../api/questions";
import DateTimePicker from "react-date-picker";
import classes from "./upload.module.css";
import Firebase from "../Firebase";
import ParticlesBg from "particles-bg";
import { checkAuth, getFaculty } from "../api/authentication";
const formField = {
  testname: "TestName  ",
  placeholder: "",
  dept: "Department  ",
  year: "Year ",
  sec: "Section ",
  course_code: "Course Code ",
  course: "Course Name ",
  dueDate: "Due Date&Time  ",
};

class UploadPage extends Component {
  state = {
    testname: " ",
    dept: " ",
    year: " ",
    sec: " ",
    coursecode: " ",
    course: " ",
    datetime: null,
    test_id: "",
  };
  handleCSV(data) {
    const cls = `${this.state.year.toUpperCase()}-${this.state.dept.toUpperCase()}-${this.state.sec.toUpperCase()}`;
    const doc = Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection(cls)
      .doc();
    const test_id = doc.id;
    this.setState({ test_id });
    console.log("Test Id ", test_id);
    console.log("Class ", cls);
    for (let i = 1; i < data.length - 1; i++) {
      addQuestion(data[i], test_id);
    }
  }
  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDate = (datetime) => {
    this.setState({ datetime });
  };

  handleSubmit = async (event) => {
    console.log("hi");
    event.preventDefault();
    const {
      testname,
      dept,
      year,
      sec,
      coursecode,
      course,
      datetime,
    } = this.state;
    const output = [
      {
        typeA: [testname, dept],
        typeB: [year, sec],
        typeC: [coursecode, course],
        typeD: [datetime],
      },
    ];
    const email = checkAuth();
    const faculty_name = await getFaculty(email);
    const cls = `${this.state.year.toUpperCase()}-${this.state.dept.toUpperCase()}-${this.state.sec.toUpperCase()}`;
    await addTestDetails(
      testname,
      sec,
      year,
      dept,
      course,
      coursecode,
      datetime,
      email,
      faculty_name.name,
      cls,
      this.state.test_id
    );
    this.setState({
      Credentials: true,
    });
    window.alert(`Enter this code to attend test ${this.state.test_id}`);
    this.props.history.push("/tests");
  };
  render() {
    return (
      <body style={{backgroundColor:"transparent",position:"relative"}}>
       <ParticlesBg  num={300} type="cobweb"   bg={true}  />
      <div className={classes.App}>
        <h1 className={classes.handing}>KONGU ENGINEERING COLLEGE</h1>
        <div className={classes.blogCard}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
            }}
          >
            <h2>UPLOAD TEST</h2>
            <br></br>
            <div className={classes.lable}> {formField.testname}</div>
            <div>
              <input
                type="text"
                name="testname"
                value={this.state.testname}
                className={classes.inputfield}
                onChange={this.change}
              ></input>
            </div>
            <br></br>
            <div className={classes.lable}>{formField.dept}</div>
            <select
              id="department"
              name="dept"
              value={this.state.dept}
              onChange={this.change}
              className={classes.inputfield}
            >
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="EEE">EEE</option>
              <option value="CE">CE</option>
              <option value="ECE">EEE</option>
              <option value="MECH">MECH</option>
              <option value="AUTO">AUTO</option>
              <option value="FT">FT</option>
            </select>
            <br></br>
            <div className={classes.lable}>{formField.year}</div>
            <select
              id="year"
              name="year"
              value={this.state.year}
              onChange={this.change}
              className={classes.inputfield}
            >
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
            <br></br>
            <div className={classes.lable}>{formField.sec}</div>
            <select
              id="section"
              name="sec"
              value={this.state.sec}
              onChange={this.change}
              className={classes.inputfield}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <br></br>
            <div className={classes.lable}>{formField.course_code}</div>
            <div>
              <input
                type="text"
                name="coursecode"
                value={this.state.coursecode}
                className={classes.inputfield}
                onChange={this.change}
              ></input>
            </div>
            <br></br>

            <div>
              <div className={classes.lable}>{formField.course}</div>
              <input
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.change}
                className={classes.inputfield}
              ></input>
            </div>
            <br></br>
            <div className={classes.lable}>{formField.dueDate}</div>
            <div>
              <input
                type="datetime-local"
                name="datetime"
                value={this.state.datetime}
                onChange={this.change}
                className={classes.datetime}
              ></input>
            </div>
            <br></br>
            <br />
            <button className={classes.csvBtn}>
              <CSVReader
                style={"visibility:hidden;"}
                onFileLoaded={(data, fileInfo) => this.handleCSV(data)}
                label="UPLOAD FILE"
                // onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
                inputStyle={{
                  visibility: "hidden",
                  cursor: "pointer",
                  fontweight: "500",
                }}
                hidden
              ></CSVReader>
            </button>

            <button
              type="submit"
              value="submit"
              className={classes.submitBtn}
              onClick={this.handleSubmit}
            >
              SUBMIT
            </button>
            <br></br>
          </form>
        </div>
      </div>
</body>
    );
  }
}

export default UploadPage;
