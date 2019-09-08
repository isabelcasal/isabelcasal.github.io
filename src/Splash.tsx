import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';
import isabel2 from './img/isabel2.png';

export default class Splash extends Component<RouteComponentProps> {
    render() {
        return (
            <div className="content is-small is-text-aligned-left">
                <img className="big-image" src={isabel2} alt="Isabel Casal" />
                <h3 className="title is-1">
                    Hi!&nbsp;<span role="img" aria-label="wave">👋🏽</span>
                </h3>
                <div className="container">
                    <div className="title is-4">
                        <p>
                            I'm Isabel, a passionate interface and experience designer from 
                        San Juan, Puerto Rico.
                        </p>
                        <p>
                            I live in Austin, Texas and work at&nbsp;<a href="https://www.peddle.com/">Peddle</a>.
                        </p>
                    </div>
                    <div className="bio">
                        <p>
                            I’m a UX designer with a desire to turn ambiguity into innovative experiences. Rooted in my Puerto Rican upbringing, I thoroughly believe in the power of community and collaboration as a way to tackle complex problems and, as a result, create impactful solutions.
                        </p>
                        <p>
                            I've focused on print and graphic design for the past 4 years and now I’m using those skills to creating unique product experiences at Peddle. I passionately believe that great design is all about asking the right questions.
                        </p>
                        <p>
                            Away from my computer, you’ll most likely find me: cooking, enjoying live music, rushing to get to a pilates class, and occasionally, (if I’m in luck and she feels like it) cuddling with my dog, <a href="https://www.instagram.com/aryathehuskygp/">Arya</a>. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}