import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import "./App.css";

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
    );
  }
}
