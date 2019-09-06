import React, { Component } from 'react';
import './App.css';
import { Router, Link } from "@reach/router"
import Portfolio from './Portfolio';
import About from './About';
import Work from './Work';
import Splash from './Splash';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="nav">
                    <Link style={{float: 'left'}} to="/">Isabel Casal</Link>
                    <nav style={{float: 'right'}}>
                        <Link to="work">work</Link>{'\t'}
                        <Link to="about">about</Link>{'\t'}
                        <Link to="portfolio">portfolio</Link>{'\t'}
                    </nav>
                </div>
                <div className="body">
                    <Router>
                        <Splash path="/" />
                        <Portfolio path="/portfolio"/>
                        <About path="/about"/>
                        <Work path="/work"/>
                    </Router>
                </div>
            </div>
        );
    }
}
