import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home"

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      classList: [],
      class: this.props.location.state.dept + this.props.location.state.course,
      name: "",
      postComment: "",
    };
    console.log(this.props.location.state)
  }
  
  

  renderPost = () => {
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

  handleName = (event) => {
    this.state.name = event.target.value
  }

  handleComment = (event) => {
    this.state.postComment = event.target.value
  }

  handlePost = (event) => {
    this.setState({class: this.class})
    console.log(this.state.name + " " + this.state.postComment)
    axios
      .post("http://localhost:8000/api/Posts/", 
      {
        id: 2,
        name: this.state.name,
        contents: this.state.postComment,
        Classes: this.state.class
      })
      .then(res => this.setState )
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
                    <input type="text" value={this.state.value} onChange={this.handleName} />
                    <input type="text" value={this.state.value} onChange={this.handleComment} />
                  </label>
                    <input type="submit" value="Submit" />
                </form>
              </div>
              {this.renderPost()}
          </div>
        </div>
      </div>
    </div>
    );
  }
  

  
  
}export default withRouter(Class)