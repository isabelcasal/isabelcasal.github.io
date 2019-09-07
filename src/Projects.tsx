import React, { Component } from 'react';
import './Projects.css';
import { RouteComponentProps } from '@reach/router';

export default class Portfolio extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="box">
                <div className="box, card">
                    Hi, my name is Isabel Casal.&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-rocket"/>
                </div>
                <div className="box, card">
                    Hi, my name is Isabel Casal.&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-rocket"/>
                </div>
                <div className="box, card">
                    Hi, my name is Isabel Casal.&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-rocket"/>
                </div>
            </div>
        );
    }
}