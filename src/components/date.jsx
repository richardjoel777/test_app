import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";

class DatePage extends Component {
  state = { date: null };

  onChange = (date) => {
    this.setState({ date });
    console.log(date);
  };

  render() {
    return <DateTimePicker onChange={this.onChange} value={this.state.date} />;
  }
}

export default DatePage;
