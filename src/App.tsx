import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Router, Link } from "@reach/router"
import Projects from './Projects';
import Contact from './Contact';
import Splash from './Splash';
import isabel from './img/isabel.jpeg';

export default class App extends Component {
    render() {
        return (
            <div className="app box">
                <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <img className="circle" src={isabel} alt="Isabel Casal" />
                            <span className="title is-3 name">Isabel Casal</span>
                        </Link> 
                        <Link className="navbar-item" to="projects">projects</Link>
                        <Link className="navbar-item" to="contact">contact</Link>
                    </div>
                </nav>
                <Router primary={false}>
                    <Splash path="/" />
                    <Projects path="/projects"/>
                    <Contact path="/contact"/>
                </Router>
            </div>
        );
    }
}
