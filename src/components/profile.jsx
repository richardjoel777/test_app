import React, { Component } from "react";
import { NativeSelect } from "@material-ui/core";
import { saveStudent, saveFaculty } from "../api/authentication";
import "./profile.css";
//import "bootstrap/dist/css/bootstrap.css";
class Profile extends Component {
  state = {
    data: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.data);
    await saveStudent(this.state.data);
    this.props.history.replace("/");
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
  render() {
    const { year, dept, sec } = this.state;
    console.log(this.state);
    return (
      <div className="body">
        <button className="btn btn-success" onClick={saveFaculty}>
          Save faculty
        </button>
        <h1>
          <b>
            <center>KONGU ENGINEERING COLLEGE</center>
          </b>
        </h1>
        <div className="container-profile">
          <center>
            <h1>
              <i className="fa fa-user"> MY PROFILE</i>
            </h1>
          </center>
          <div className="stud">
            <div className="stud-con">
              <form onSubmit={this.handleSubmit}>
                <label>STUDENT NAME:</label>
                <br />
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <br />
                <label>ROLL NO.</label>
                <br />
                <input
                  type="text"
                  name="roll"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <br />
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

export default Profile;
