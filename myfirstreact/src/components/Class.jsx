import React, {useState} from "react";
import { useHistory, useLocation } from "react-router-dom";


function Class() {
  const location = useLocation();

  console.log(location.state.dept + " " + location.state.course)
  const dept = location.state.dept;
  const course = location.state.course;
  
  
  const stuff = function(){
    document.getElementById("Course Title").innerHTML = dept + " " + course;
  }
  
  return (
    <div className="class">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 id="Course Title" class="font-weight-light">Class</h1>
            
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );

  
  
}

export default Class;