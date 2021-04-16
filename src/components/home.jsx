import React from "react";
import { withRouter } from "react-router-dom";
import bg from "./stu 1.jpg";
import style from "./test_code.module.css";

const Home = withRouter(({ history }) => (
  <div className="test_end">
    <img src={bg} alt="bg"></img>
    <div className={style.blog}>
      <p className={style.disc}>Enter The Test Code!</p>
      <form
        onSubmit={(e) => history.push(`/test/${e.target.code.value.trim()}`)}
      >
        <input type="text" name="code" className={style.input}></input>
        <button type="submit" className={style.btn}>
          GO!
        </button>
        <button
          className={style.btn}
          onClick={() => {
            localStorage.removeItem("TestAppUser");
            history.push("/login");
          }}
        >
          LOG OUT
        </button>
      </form>
    </div>
  </div>
));

export default Home;
