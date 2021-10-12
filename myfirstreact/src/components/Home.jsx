import React, {useState} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Class from "./Class"
import {Link} from 'react-router-dom'

function Home() {
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
       //const url = '/' + selected + '-' + event.target.value
       //<Redirect to=url />
       //window.alert(event.target.value)
      
     };


     const handleClick = () =>{ 
      //<Link to="/class" className="btn btn-primary">Sign up</Link>
      //window.alert(selected + " " + selected2)
      history.push('/class')
     }
     
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
   
     /*
     var sel = document.getElementById('DeptList');
     for(var i = 0; i < deptList.length; i++) {
       var opt = document.createElement('option');
       opt.innerHTML = deptList[i];
       opt.value = deptList[i];
       if (sel != null)
       sel.appendChild(opt);
     }
     */ 
     
     /** If "Type" is null or undefined then options will be null,
      * otherwise it will create a options iterable based on our array
      */
     if (type) {
       options = type.map((el) => <option key={el}>{el}</option>);
     }
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://dz0zjhi21dz2t.cloudfront.net/media/96121/tour/1558123816200/1366_front.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">What course are you interested in? </h1>

            <form>
              <div>
                {/** Bind changeSelectOptionHandler to onChange method of select.
                 * This method will trigger every time different
                 * option is selected.
                 */}
                <select id = "DeptList" onChange={changeSelectOptionHandler}>
                  <option>Choose...</option>
                  <option>CS</option>
                  <option>MATH</option>
                  <option>IPRO</option>

                </select>
              </div>
              <div>
                <select onChange={finalSelectHandler}>
                  {
                    
                    options
                  }
                </select>

                
              </div>
              <div>
                <button onClick={handleClick}>
                  See Class
                </button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;