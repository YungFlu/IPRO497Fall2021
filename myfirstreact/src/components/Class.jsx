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

  handlePost = Posts => {
    this.setState({class: this.state.class})
    console.log("handlePost: " + this.state.name + "- " + this.state.postComment)
    
    axios
      .post("http://localhost:8000/api/Posts/", 
      {
        id: Math.floor(Math.random() * 10000 + 2),
        name: String(this.state.name),
        contents: String(this.state.postComment),
        Classes: 1, //this.state.class
      })
      .then(res => this.refreshPosts())
      .catch(err => console.log("handlePost error: " + err));
    
    localStorage.setItem('Class', this.state.class);
    
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