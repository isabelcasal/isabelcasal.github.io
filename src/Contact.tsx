import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

export default class Contact extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="box">
                <h3>
                    info@isabelcasal.design
                    <i className="fas fa-rocket"/>
                </h3>
            </div>
        );
    }
}