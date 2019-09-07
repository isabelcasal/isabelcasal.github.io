import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';


export default class Splash extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="content is-small is-centered">
                <h3 className="title is-1">
                    Hi,&nbsp;<span role="img" aria-label="wave">👋🏽</span>
                </h3>
                <div className="subtitle is-5">
                    I'm Isabel, a passionate interface and experience designer from 
                    San Juan, Puerto Rico. I live in Austin, Texas and work at&nbsp;
                    <a className="tag is-success is-large" href="https://www.peddle.com/">Peddle</a>.
                </div>
            </div>
        );
    }
}