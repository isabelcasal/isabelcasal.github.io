import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

declare var Calendly: any;

export default class Contact extends Component<RouteComponentProps> {

    componentDidMount() {
        Calendly.initBadgeWidget({ url: 'https://calendly.com/isabelcasalnazario/15min', text: 'Schedule time with me', color: '#00a2ff', textColor: '#ffffff', branding: true });
    }

    componentWillUnmount() {
        Calendly.destroyBadgeWidget();
    }

    render() {
        return (
            <div className="content is-medium">
                <p>
                    <a className="button" href="mailto:isabelcasalnazario@gmail.com">isabelcasalnazario@gmail.com</a>
                </p>
                <p>
                    <a className="button is-primary" href="https://www.linkedin.com/in/isabelcasalnazario/">LinkedIn</a>
                </p>
                <p>
                    <a className="button is-info" href="https://twitter.com/icanaz">Twitter</a>
                </p>
            </div>
        );
    }
}