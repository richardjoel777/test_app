import React from "react";
import { getTests } from "../api/questions";

const Home = () => {
  return (
    <button onClick={() => localStorage.removeItem("TestAppUser")}>
      click me
    </button>
  );
};

export default Home;
