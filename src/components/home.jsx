import React from "react";
import { withRouter } from "react-router-dom";
import bg from "./stud 4.jpg";
import style from "./test_code.module.css";
import MouseParticles from 'react-mouse-particles';

const Home = withRouter(({ history }) => (
  <div className="test_end">
  <MouseParticles g={4} color="random" cull="col,image-wrapper"/>
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
