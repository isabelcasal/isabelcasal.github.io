import React, { Component } from 'react';
import garden from './img/garden-2018.png';

export default class Garden extends Component {
    render() {
        return (
            <div>
                <p>
                    For me, gardening brings awareness of life. Watching my garden evolve over the years has made me a long term thinker and has brought me much inner peace.
                </p>
                <p>
                    ❤️ ✌️🌱
                </p>
                <img src={garden} alt="Garden" style={{height: '400px'}}/>
            </div>
        )
    }
}