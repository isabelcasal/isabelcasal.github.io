import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';
import eventPicasso from './img/event-picasso.png';
import sxsw from './img/sxsw.png';
import tackle from './img/tackle.png';
import visual from './img/visual.png';

export default class Portfolio extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="content is-large">
                <section className="section">
                    <div className="box card">
                        <img src={eventPicasso} alt="Event Picasso" />
                    </div>
                </section>
                <section className="section">
                    <div className="box card">
                        <img src={sxsw} alt="SXSW" />
                    </div>
                </section>
                <section className="section">
                    <div className="box card">
                        <img src={tackle} alt="Tackle" />
                    </div>
                </section>
                <section className="section">
                    <div className="box card">
                        <img src={visual} alt="Visual" />
                    </div>
                </section>
            </div>
        );
    }
}