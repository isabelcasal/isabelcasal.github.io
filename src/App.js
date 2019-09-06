import React, { Component } from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import AboutMe from './AboutMe';
import UX from './UX';

export default class App extends Component {
    render() {
        return (
            <div class="App">
                <div class="Nav">
                    <nav>
                        <Link to="/">About Me</Link> |{" "}
                        <Link to="ux">UX</Link> |{" "}
                    </nav>
                </div>
                <Router>
                    <AboutMe path="/" />
                    <UX path="/ux"/>
                </Router>
            </div>
        );
    }
}
