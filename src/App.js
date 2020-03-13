import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Activities from "./pages/activities/Activities"
import Act1 from "./pages/activities/Act1"
import Act2 from "./pages/activities/Act2"
import Act3 from "./pages/activities/Act3"
import Act4 from "./pages/activities/Act4"
import Act5 from "./pages/activities/Act5"
import Act6 from "./pages/activities/Act6"
import Act7 from "./pages/activities/Act7"
import Staff from './pages/staff/Staff'
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
          <Route exact path="/activities-1" component={Act1} />
          <Route exact path="/activities-2" component={Act2} />
          <Route exact path="/activities-3" component={Act3} />
          <Route exact path="/activities-4" component={Act4} />
          <Route exact path="/activities-5" component={Act5} />
          <Route exact path="/activities-6" component={Act6} />
          <Route exact path="/activities-7" component={Act7} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
