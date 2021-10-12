import React, {useState} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {

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
       //selected is the dept
       //window.alert(event.target.value)
       <Redirect to="/class" />
     };
     
     /** Different arrays for different dropdowns */
     const deptList = ["CS", "MATH", "IPRO"]
     const courseNums = [[100, 200, 300], [400, 500, 600], [700, 800, 900]]
     
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
       <h1> What course are you interested in? </h1>
         <form>
           <div>
             {
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
        </form>
   
     */
   
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
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;