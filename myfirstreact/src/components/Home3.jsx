import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Class from "./Class";
import { Link } from 'react-router-dom';
import "../home.scss"
import axios from "axios";

function Home(props) {

  const [classes, getClasses] = useState("")

  useEffect(() => {
    getAllClasses();
  }, []);

  const getAllClasses = () => {
    axios
      .get("http://localhost:8000/api/Classes/")
      .then((res) => {
        const allClasses = res.data;
        //console.log("allClasses: " + allClasses)
        getClasses(allClasses);
      })
      .catch(err => console.log(err));
  }

  console.log("Classes in console: " + classes)
  const fullCourseList = [];
  for (let i = 0; i < classes.length; i++){
    //console.log(classes[i].courseCode)
    fullCourseList.push(classes[i].courseCode)
  }
  console.log("fullCourseList: " + fullCourseList)

  let options = null;
  if (fullCourseList){
    options = fullCourseList.map((el) => <option key={el}>{el}</option>);
  }

  let history = useHistory();
  /** "selected" here is state variable which will hold the
  * value of currently selected dropdown.
  */
  const [selected, setSelected] = useState("");

  
  const finalSelectHandler = (event) => {
    setSelected(event.target.value);
    console.log("finalSelect: " + event.target.value)
  };

  const handleClick = () => {
    console.log("Final course: " + selected)
    localStorage.setItem("Class", selected)
    //history.push("/class", { dept: selected, course: selected2 })
    history.push("/class", { selectedCourse: selected })

  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  }


  return (
    
    <div>
    <div class="home" >
      <h1 class="font-weight-light">Select a class to get started.</h1>
      
      <div class="dropdown">
        <form>
          <div>
            <select id="DeptList" onChange={finalSelectHandler}>
              {options}
            </select>
            <button onClick={handleClick}>
              See Class
            </button>
            
            </div>
        </form>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>

    </div>
  );
}

export default Home;