import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
/*
function Course(){
  const location = useLocation();
  const dept = location.state.dept;
  const course = location.state.course;
  return dept + " " + course;
}
*/

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      classList: []
    };
  }

  /*
  Course = () => {
    const location = this.props.useLocation();
    const dept = location.state.dept;
    const course = location.state.course;
    return dept + " " + course;
  }
  */
  
  
  Course = () => {
    const location = this.props.passData;
    //const dept = location.state.dept;
    //const course = location.state.course;
  
    return location;
  }
  

  renderPost = () => {
    const yes = this.Course();
    console.log(yes + "sadads");

    this.refreshPosts();
    return this.state.postList.map(Posts => (
      <div>
        <li key = {Posts.id}>
          <span title = {Posts.name}>
            {Posts.name}
          </span>

        </li>
        <li key = {Posts.id}>
          <span title = {Posts.contents}>
            {Posts.contents}
          </span>
        </li>
      </div>
    ));
  };

  refreshClasses = () => {
    axios
      .get("http://localhost:8000/api/Classes/")
      .then(res => this.setState({ classList: res.data }))
      .catch(err => console.log(err));
  };

  refreshPosts = () => {
    axios
      .get("http://localhost:8000/api/Posts/")
      .then(res => this.setState({ postList: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
    
    <div className="class">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 id="Course Title" class="font-weight-light">Class</h1>
              <div>
                <button onClick="">
                  Create Post
                </button>
              </div>
              {this.renderPost()}
          </div>
        </div>
      </div>
    </div>
    );
  }
  

  
  
}