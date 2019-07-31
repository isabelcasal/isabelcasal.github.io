import React, { Component } from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import AboutMe from './AboutMe';
import Articles from './Articles';
import Garden from './Garden';

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
                    <Articles path="/articles"/>
                    <Garden path="/garden"/>
                </Router>
            </div>
        );
    }
}
