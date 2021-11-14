import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
import "../styles.scss" 
import QueryString from "query-string";
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { nominalTypeHack } from "prop-types";

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      classList: [],
      class: localStorage.getItem("Class") || this.props.location.state.dept + " " + this.props.location.state.course,
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
      .get("http://localhost:8000/api/Posts/", { params: {Classes: this.state.class } })
      .then(res => this.setState({ postList: res.data }))
      .catch(err => console.log(err));
  };
  

  handleName = (event) => {
    console.log("handleName: " + event.target.value)
    this.state.name = event.target.value
  }

  handleComment = (event) => {
    this.state.postComment = event.target.value
  }

  handlePost = Posts => {
    //this.setState({class: this.state.class})
    console.log("handlePost: " + this.state.name + "- " + this.state.postComment)
    
    /*
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
    */
    axios
      .post("http://localhost:8000/api/Posts/", 
      {
        name: String(this.state.name),
        contents: String(this.state.postComment),
        Classes: this.state.class,
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
                <Form onSubmit={this.handlePost}>
                  <Form.Group className="mb-3" controlId="formBasicEmail" onChange = {e => this.setState({ name: e.target.value })}>
                   
                    <Form.Control type="name" placeholder="Enter Name"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                    <Form.Control type="professor" placeholder="Enter Professor Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                    <textarea placeholder="Enter Comment" onChange = {e => this.setState({ postComment: e.target.value })}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Anonymous" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
<<<<<<< HEAD
                </Form>    
              </div>
              <div >
              {this.renderPost()}
=======
                </Form>
>>>>>>> 066f35482cc9020e71f65bc9e572ccd975b8cbca
              </div>
          </div>
        </div>
      </div>
      <section >
    {this.renderPost()}
    </section>
    </div>
    );
  }
  

  
  
}export default withRouter(Class)