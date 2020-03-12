import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Activities from "./pages/activities/Activities"
import Contact from "./pages/contact/Contact";

import "./assets/css/App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
