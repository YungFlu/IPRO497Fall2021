import React, {useState} from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Navigation, Footer, Home, About } from "./components";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"


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
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
      

    </div>
  );
};
