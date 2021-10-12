import React, {useState} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Navigation, Footer, Home, About } from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"


export default function App () {
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
    //window.alert(selected)

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
    <div
      style={{
        //padding: "16px",
        //margin: "16px",
        alignItems: "center"
      }}
    >

      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
      <h1> What course are you interested in? </h1>
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
  );
};
