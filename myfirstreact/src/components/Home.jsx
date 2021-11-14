import React, {useState} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Class from "./Class";
import {Link} from 'react-router-dom';
//import "../home.scss" 

function Home(props) {

    let history = useHistory();
      /** "selected" here is state variable which will hold the
      * value of currently selected dropdown.
      */
     const [selected, setSelected] = useState("");
  
     /** Function that will set different values to state variable
      * based on which dropdown is selected
      */
     const changeSelectOptionHandler = (event) => {
       setSelected(event.target.value);
       //window.alert(event.target.value)
     };
   
     const [selected2, setSelected2] = useState("")
   
     const finalSelectHandler = (event) => {
       setSelected2(event.target.value);
       console.log("finalSelect: " + event.target.value)
       
       //const url = '/' + selected + '-' + event.target.value
       //<Redirect to=url />
       //window.alert(event.target.value)
      
     };

     const handleClick = () => { 
        //check if dropdowns are empty??
        //bug where they MUST click on the dropdown for course number
        console.log(selected)
        console.log("Selected 2: " + selected2)
        console.log("Final course: " + selected + selected2)
        localStorage.setItem("Class", selected + " " + selected2)
        history.push("/class", { dept: selected, course: selected2 })
        
     };
     
     /** Different arrays for different dropdowns */
     const deptList = ["CS", "MATH", "IPRO"]
     const courseNums = [[100, 104, 105, 110, 115, 116, 201, 330, 331, 340, 
      350, 351, 397, 401, 402, 403, 406, 411, 422, 425, 429, 430, 440, 442,
      443, 445, 447, 450, 451, 455, 456, 458, 470, 480, 481, 482, 484, 485,
      487, 491, 492, 495, 497, 511, 512, 513, 520, 521, 522, 525, 528, 529,
      530, 531, 532, 533, 535, 536, 537, 538, 539, 540, 541, 542, 544, 545,
      546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559,
      560, 561, 562, 565, 566, 570, 572, 577, 578, 579, 580, 581, 582, 583,
      584, 585, 586, 587, 588, 589, 590, 591, 594, 595, 597, 612, 630, 642,
      681, 689, 691, 695, 750, 763], [400, 500, 600], [497]]
     
     /** Type variable to store different array for different dropdown */
     let type = null;
     
     /** This will be used to create set of options that user will see */
     let options = null;
     
     /** Setting Type variable according to dropdown */
     for (let i = 0; i < deptList.length; i++){
       if (selected === deptList[i]){
         type = courseNums[i]
         break
       }
     }
     
     /** If "Type" is null or undefined then options will be null,
      * otherwise it will create a options iterable based on our array
      */
     if (type) {
       options = type.map((el) => <option key={el}>{el}</option>);
     }
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
    
    <div class="home">
          <h1 class="font-weight-light">What course are you interested in? </h1>
<div class="dropdown">
<form>
  <div>
    <select id = "DeptList" onChange={changeSelectOptionHandler}>
      <option>Choose...</option>
      <option>CS</option>
      <option>MATH</option>
      <option>IPRO</option>
    </select>
    <select id = "ClassList" onChange={finalSelectHandler}>
      {
        options
      }
      {console.log("Options = " + options)}
    </select>    
  </div>
  <div>
    <button onClick={handleClick}>
      See Class
    </button>
  </div>
</form>
</div>
      <div id= "background">

      </div>
    </div>
  );
}

export default Home;