import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Router, Link } from "@reach/router"
import Projects from './Projects';
import Contact from './Contact';
import Splash from './Splash';

export default class App extends Component {
    render() {
        return (
            <div className="app, box">
                <div className="nav, box">
                    <Link style={{float: 'left'}} to="/">Isabel Casal</Link>
                    <nav style={{float: 'right'}}>
                        <Link to="projects">projects</Link>{'\t'}
                        <Link to="contact">contact</Link>{'\t'}
                    </nav>
                </div>
                <div className="body, box">
                    <Router>
                        <Splash path="/" />
                        <Projects path="/projects"/>
                        <Contact path="/contact"/>
                    </Router>
                </div>
            </div>
        );
    }
}
