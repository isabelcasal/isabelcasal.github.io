import React, { Component } from 'react';
import aaron from './img/aaron.jpg';

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h3>
                    Hi, my name is Aaron Pankratz. Welcome to my simple blog.
                    <i className="fas fa-rocket"/>
                </h3>
                <img src={aaron} alt="Aaron" style={{height: '200px'}}/>
                <p>
                    My areas of interest include science, engineering, music, computer programming, botany, writing, and dog training.
                </p>
            </div>
        );
    }
}