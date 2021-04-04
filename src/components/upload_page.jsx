import React,{Component} from 'react';
import CSVReader from "react-csv-reader";
import { addQuestion, getQuestions } from "../api/questions";
import { uploadAnswers } from "../api/answers";
import classes from './upload.module.css';
const   formField =
{
  testname: "TestName  ",
  placeholder: "",
  dept: 'Department  ',
  year: 'Year ',
  sec: 'Section ',
  course_code: 'Course Code ',
  course: 'Course Name ',
  dueDate: 'Due Date&Time  ',
}


class UploadPage extends Component {
state={
  testname:' ',dept:' ',year:' ',sec:' ',coursecode:' ',course:' ',datetime:' ',
};
handleCSV(data) {
  for (let i = 1; i < data.length - 1; i++) {
    addQuestion(data[i]);
  }
}
change = e => {
  this.setState({[e.target.name] : e.target.value})
};
handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  const{
    testname,dept,year,sec,coursecode,course,datetime
  }=this.state;
  const output=[{typeA:[testname,dept],typeB:[year,sec],typeC:[coursecode,course],typeD:[datetime]}];
  this.setState(
    {
      Credentials:true
    }
  );
}
render(){
  return (
    <div className={classes.App} >
      <h1 className={classes.handing}>KONGU ENGINEERING COLLEGE</h1>
      <div className={classes.blogCard}>
        <form onSubmit={(e) => {
              e.preventDefault();
              console.log("submitted");
            }}>
              <h2>UPLOAD TEST</h2>
              <br></br>
          {formField.testname}
          <div >
            <input type="text" name='testname' value={this.state.testname} className={classes.inputfield} onChange={this.change}></input>
          </div><br></br>
          {formField.dept}
          <select id="department" name="dept" value={this.state.dept} onChange={this.change} className={classes.inputfield}>

            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="EEE">EEE</option>
            <option value="CE">CE</option>
            <option value="ECE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="AUTO">AUTO</option>
            <option value="FT">FT</option>
          </select><br></br>
          {formField.year}<select id="year" name="year" value={this.state.year} onChange={this.change} className={classes.inputfield}>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select><br></br>
          {formField.sec}<select id="section" name="sec" value={this.state.sec} onChange={this.change} className={classes.inputfield}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select><br></br>
          {formField.course_code}<div ><input type="text" name="coursecode" value={this.state.coursecode} className={classes.inputfield} onChange={this.change} ></input></div><br></br>
          {formField.course}<div ><input type="text" name="course" value={this.state.course} onChange={this.change}  className={classes.inputfield} ></input></div><br></br>
          {formField.dueDate}<div ><input type="datetime-local" name="datetime" value={this.state.datetime} onChange={this.change} className={classes.datetime}></input></div>
<br></br>
          <button type='submit' onClick={() => getQuestions()}>CREATE FILE</button><p>(or)</p>
          <button type='submit'  >UPLOAD FILE<CSVReader className={classes.CSVReader} style={"visibility:hidden"}
              onFileLoaded={(data, fileInfo) => this.handleCSV(data)}
              // onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
            /></button><br></br>
      
          <button type='submit' value='submit' className={classes.submitBtn}>SUBMIT</button><br></br>
          

        </form>
      </div>
    </div>
  )
}
}

export default UploadPage;
