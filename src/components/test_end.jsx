import React,{Component} from "react";
import styles from "./test_end.module.css";
import ParticlesBg from "particles-bg";
class TestEnd extends Component {
 
  render(){
    return (
      <div className="test_end">
     <ParticlesBg type="polygon"  bg={true} />
      <p className={styles.head}>KONGU ENGINEERING COLLEGE</p>
        <div className={styles.disp}>
          <h1 className={styles.discription}>Test is Successfully Submitted!</h1><br/>
          <button className={styles.btn} onClick={() =>this.props.history.push("/")}>RETURN HOME</button>
      </div>
    </div>
    );
  }
  }
export default TestEnd;
