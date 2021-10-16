import React, {useState, Component} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Class from "./Class";
import {Link} from 'react-router-dom';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dept: "",
          courseNum: "",
          currentDepts: ["CS", "MATH", "IPRO"],
          currentCourses: [[100, 104, 105, 110, 115, 116, 201, 330, 331, 340, 
            350, 351, 397, 401, 402, 403, 406, 411, 422, 425, 429, 430, 440, 442,
            443, 445, 447, 450, 451, 455, 456, 458, 470, 480, 481, 482, 484, 485,
            487, 491, 492, 495, 497, 511, 512, 513, 520, 521, 522, 525, 528, 529,
            530, 531, 532, 533, 535, 536, 537, 538, 539, 540, 541, 542, 544, 545,
            546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559,
            560, 561, 562, 565, 566, 570, 572, 577, 578, 579, 580, 581, 582, 583,
            584, 585, 586, 587, 588, 589, 590, 591, 594, 595, 597, 612, 630, 642,
            681, 689, 691, 695, 750, 763], [400, 500, 600], [497]],
          options: [],
        };
        
    }

    selectDept = (item) => {
        this.state.dept = item.target.value;
        console.log("selectDept dept: " + this.state.dept)
        for (let i = 0; i < this.state.currentDepts.length; i++){
            if (this.state.dept === this.state.currentDepts[i]){
                if (this.state.dept) {
                    //this.state.options = this.state.currentCourses[i]//type.map((el) => <option key={el}>{el}</option>);
                    console.log("selectDept Courses for Dept: " + this.state.currentCourses[i])
                    //this.renderCourses(this.state.currentCourses[i])
                    //this.state.options = (this.state.currentCourses[i]).map((el) => <option key={el}>{el}</option>);
                    this.state.options = this.state.currentCourses[i]
                    console.log("selectDept: " + this.state.options)
                    this.render()
                    break;
                }
                
            }
        }
    }

    selectCourseNum = (item) => {
        this.state.courseNum = item.target.value;
    }

    handleClick = () => {
        this.history.push("/class", { dept: this.state.dept })
    }


    render() {
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
                        <select id = "DeptList" onChange={this.selectDept}>
                            <option>Choose...</option>
                            <option>CS</option>
                            <option>MATH</option>
                            <option>IPRO</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={this.selectCourseNum}>
                            {console.log("RENDER: " + this.state.options)}
                            {this.state.options.map((el) => <option key={el}> {el} </option>)}
                            {console.log("AFTER RENDER: " + this.state.options)}
                        </select>
                    </div>
                    <div>
                        <button onClick={this.handleClick}>
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
}

export default Home2;