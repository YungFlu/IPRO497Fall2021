import React, {useState, Component} from "react";
import { render } from "react-dom";
import { useHistory, useLocation, withRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Home"
import "../styles.scss" 
import {Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import insider from '../insider_platform_1.png';
import Footer from "./Footer"

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      oldPostList: [1],
      classList: [],
      class: localStorage.getItem("Class") || this.props.location.state.selectedCourse, //this.props.location.state.dept + " " + this.props.location.state.course,
      name: "",
      postComment: "",
      classDesc: localStorage.getItem("courseDesc") || this.props.location.state.selectedDesc || ""
    };
    console.log(this.props.location.state)
    //console.log("localStorage courseDesc: " + localStorage.getItem("courseDesc"))
    //console.log("POSTLIST FROM HOME3: " + this.state.postList)
  }  
  
  //////////// START TESTING AREA /////////////

  renderPost = () => {
    //this.state.postList = PostList;
    if (this.state.postList.length !== this.state.oldPostList.length){
      //console.log("THE POSTS ARE NOT EQUAL TO EACH OTHER")
      //console.log("OLD POST LIST: " + this.state.oldPostList.length)
      //console.log("NEW POST LIST: " + this.state.postList.length)
      this.state.oldPostList = this.state.postList;
      this.refreshPosts();
    }
    
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

  refreshPosts = () => {
    axios
      .get("http://localhost:8000/api/Posts/")
      .then(res => this.setState({ postList: res.data.filter(classNum => classNum.Classes === this.state.class) }))
      .catch(err => console.log(err));

    
  };

  ////////// END TESTING AREA //////////

  refreshClasses = () => {
    axios
      .get("http://localhost:8000/api/Classes/")
      .then(res => this.setState({ classList: res.data }))
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
          <div class="insiders"> <img src={insider} alt="Logo" /> </div>
        <div class = "courseDesc">
        <p id="Course Desc"> <b>{this.state.class} Class Description</b></p> 
                {this.state.classDesc}
        </div>
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
                  
                    <textarea placeholder="  Enter Comment" onChange = {e => this.setState({ postComment: e.target.value })}/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
          </div>
        </div>
      </div>
      <section >
        {this.renderPost()}
      </section>
      <Footer class = "classfooter"/>
    </div>
    );
  }
  

  
  
}export default withRouter(Class)