import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';


export default class Splash extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="box">
                <h3>
                    Hi, my name is Isabel Casal.&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fas fa-rocket"/>
                </h3>
            </div>
        );
    }
}