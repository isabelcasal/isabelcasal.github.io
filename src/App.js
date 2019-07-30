import React, { Component } from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import AboutMe from './AboutMe';

export default class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="Nav">
          <nav>
            <Link to="/">About Me</Link> |{" "}
            <Link to="articles">Articles</Link> |{" "}
            <Link to="garden">Garden</Link> |{" "}
            <Link to="ideas">Ideas</Link> |{" "}
            <Link to="music">Music</Link>
          </nav>
        </div>
        <Router>
          <AboutMe path="/" />
        </Router>
        
      </div>
    );
  }
}
