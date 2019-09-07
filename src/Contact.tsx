import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

export default class Contact extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="content is-medium">
                <p>
                    <a className="button" href="mailto:isabelcasalnazario@gmail.com">isabelcasalnazario@gmail.com</a>
                </p>
                <p>
                <a className="button is-primary" href="https://www.linkedin.com/in/isabelcasalnazario/">LinkedIn</a>
                </p>
            </div>
        );
    }
}