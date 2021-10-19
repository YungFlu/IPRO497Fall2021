import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
import "../styles.scss" 
import QueryString from "query-string";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      classList: [],
      class: localStorage.getItem("Class") || this.props.location.state.dept + this.props.location.state.course,
      name: "",
      postComment: "",
    };
    console.log(this.props.location.state)
  }  

  /*
  renderClassName = () => {
    console.log("I AM IN RENDERCLASSNAME")
    if (this.props.location.state.dept != null && this.props.location.state.course != null){
      document.getElementById("Course Title").innerHTML = this.props.location.state.dept + this.props.location.state.course;
      this.state.class = this.props.location.state.dept + this.props.location.state.course;
      console.log("renderClassName1: " + this.props.location.state.dept + this.props.location.state.course)
    }else{
      document.getElementById("Course Title").innerHTML = localStorage.getItem("Class")
      this.state.class = localStorage.getItem("Class")
      console.log("renderClassName2: " + localStorage.getItem("Class"))
    }
  }
  */

  renderPost = () => {
    this.refreshPosts();
    return this.state.postList.map(Posts => (
      <div className="divStyle">
        <h4 key = {Posts.id}>
          <span  title = {Posts.name}>
                {Posts.name}
          </span>
        </h4>
        <h5 key = {Posts.id}>
          <p title = {Posts.contents}>
            {Posts.contents}
          </p>
        </h5>
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

  handleName = (event) => {
    this.state.name = event.target.value
  }

  handleComment = (event) => {
    this.state.postComment = event.target.value
  }

  handlePost = (event) => {
    this.setState({class: this.state.class})
    console.log("handlePost: " + this.state.name + "- " + this.state.postComment)
    const name = this.state.name;
    const contents = this.state.postComment;
    const classes = this.state.class;
    axios
      .post("http://localhost:8000/api/Posts/", 
      {
        id: 2,
        name: this.state.name,
        contents: this.state.postComment,
        Classes: this.state.class
      })
      .then(res => {})//this.setState({ postList: res.data }))
      .catch(err => console.log("handlePost error: " + err));
  
    localStorage.setItem('Class', this.state.class);
    this.refreshPosts();
  }

  render() {
    return (
    
    <div className="class">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 id="Course Title" class="font-weight-light">{this.state.class}</h1> 
              <div>
                <form onSubmit={this.handlePost}>

                  <label> 
                    <div>
                    <input type="text" value={this.state.value} onChange={this.handleName} />
                    </div>
                    <div>
                    <input type="text" value={this.state.value} onChange={this.handleComment} />
                    </div>
                  </label>
                    <input type="submit" value="Submit" />
                </form>
              </div>
              <div >
              {this.renderPost()}
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
  

  
  
}export default withRouter(Class)