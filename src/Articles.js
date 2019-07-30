import React, { Component } from 'react';

export default class Articles extends Component {
    render() {
        return (
            <div>
                <h3>
                    Here are some articles I've written.
                </h3>
                <p>
                    <a href="https://blog.goodtime.io/2019/04/3-questions-stop-asking-interviews/">
                        3 questions to stop asking during interviews
                    </a>
                </p>
                <p>
                    <a href="https://blog.goodtime.io/2019/07/3-decrease-turnover-helps-recruiter/">
                        3 Ways You Can Decrease Turnover (and How that Helps You as a Recruiter)
                    </a>
                </p>
            </div>
        )
    }
}