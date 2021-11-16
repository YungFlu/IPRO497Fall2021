import React, {useState, Component} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"
import Class from "./components/Class"
import Home2 from "./components/Home2"
import Home3 from "./components/Home3"

export default function App () {
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
          <Route path="/" exact component={() => <Home3 />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/class" exact component={() => <Class />} />
        </Switch>
        <Footer />
      </Router>
      

    </div>
  );
};
