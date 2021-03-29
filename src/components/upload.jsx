import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { NativeSelect } from "@material-ui/core";
import { addQuestion, addTestDetails } from "../api/questions";
import Firebase from "../Firebase";
class Upload extends Component {
  state = {
    fileData: {},
    data: {},
    test_id: "",
  };
  handleSubmit = async (e) => {
    const { data } = this.state;
    e.preventDefault();
    const cls = data.year + "-" + data.dept + "-" + data.sec;
    //console.log("Inside add test info ", this.state.test_id);
    await addTestDetails(this.state.data, cls, this.state.test_id);
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    if (input.name === "year") this.setState({ year: input.value });
    if (input.name === "dept") this.setState({ dept: input.value });
    if (input.name === "sec") this.setState({ sec: input.value });
    this.setState({ data });
    console.log(input.value);
  };
  year = [
    {
      value: "I",
      label: "I Year",
    },
    {
      value: "II",
      label: "II Year",
    },
    {
      value: "III",
      label: "III Year",
    },
    {
      value: "IV",
      label: "IV Year",
    },
  ];
  dept = [
    {
      value: "CSE",
    },
    {
      value: "IT",
    },
    {
      value: "EEE",
    },
    {
      value: "ECE",
    },
    {
      value: "CIVIL",
    },
    {
      value: "FT",
    },
    {
      value: "MECH",
    },
    {
      value: "CHE",
    },
    {
      value: "BSC",
    },
  ];

  sec = ["A", "B", "C", "D", "E"];

  handleCSV(data) {
    const doc = Firebase.firestore()
      .collection("data")
      .doc("tests")
      .collection("II-CSE-C")
      .doc();
    const test_id = doc.id;
    this.setState({ test_id });
    console.log("Test Id ", test_id);
    for (let i = 1; i < data.length - 1; i++) {
      addQuestion(data[i], test_id);
    }
  }

  render() {
    const { year, dept, sec } = this.state;
    return (
      <div className="body">
        <div className="container-profile">
          <div className="stud">
            <div className="stud-con">
              <form onSubmit={this.handleSubmit}>
                <label>Test NAME:</label>
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  required
                />
                <label>YEAR:</label>
                <br />
                <NativeSelect
                  value={year}
                  onChange={this.handleChange}
                  name="year"
                  type="select"
                  required
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <option aria-label="None" value="" />
                  {this.year.map((y) => (
                    <option value={y.value}>{y.label}</option>
                  ))}
                </NativeSelect>
                <br />
                <br />
                <label>DEPARTMENT:</label>
                <br />
                <NativeSelect
                  value={dept}
                  onChange={this.handleChange}
                  name="dept"
                  type="select"
                  required
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <option aria-label="None" value="" />
                  {this.dept.map((d) => (
                    <option value={d.value}>{d.value}</option>
                  ))}
                </NativeSelect>
                <br />
                <br />
                <label>SECTION:</label>
                <br />
                <NativeSelect
                  value={sec}
                  onChange={this.handleChange}
                  name="sec"
                  type="select"
                  required
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  <option aria-label="None" value="" />
                  {this.sec.map((s) => (
                    <option value={s}>{s}</option>
                  ))}
                </NativeSelect>
                <br />
                <br />
                <CSVReader
                  onFileLoaded={(data, fileInfo) => this.handleCSV(data)}
                  // onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
                />
                <button type="submit" className="button">
                  submit
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
