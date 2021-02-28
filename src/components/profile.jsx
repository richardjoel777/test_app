import React, { Component } from "react";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.css";
class Profile extends Component {
  state = {
    data: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  render() {
    return (
      <div className="body">
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
                <input
                  type="text"
                  name="year"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <br />
                <label>DEPARTMENT:</label>
                <br />
                <input
                  type="text"
                  name="department"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <br />
                <label>SECTION:</label>
                <br />
                <input
                  type="text"
                  name="section"
                  onChange={this.handleChange}
                  required
                />
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
