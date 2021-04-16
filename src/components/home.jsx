import React from "react";
import { getTests } from "../api/questions";
import bg from './stu 1.png';
import style from './test_code.module.css'
const Home = () => {
  return (

    <div className="test_end">
    <img src={bg} alt="bg" ></img>
    <div className={style.blog}>
        <p className={style.disc}>Enter The Test Code!</p>
        <input type="text" className={style.input}></input>
        <button type="submit" className={style.btn}>GO!</button>
        <button type="submit" className={style.btn} onClick={() => localStorage.removeItem("TestAppUser")}>LOG OUT</button>
    </div>
</div>
  );
};

export default Home;
