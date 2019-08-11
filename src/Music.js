import React, { Component } from 'react';

export default class Music extends Component {
    render() {
        return (
            <div>
                <p>
                    Made with ❤️, and 💻 in Austin, Texas.
                </p>
                <p>
                    Aaron Pankratz 👨‍🎤🎸🎤
                </p>
                <p>
                    Marcos Rocha 👨‍🎤🎸🎤
                </p>
                <p>
                    Ariel Pankratz 👩‍🎤🎹🎤
                </p>
                <iframe src="https://open.spotify.com/embed/artist/5nHNdJ4Owkzh98IPklwFYE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/82977650&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oUWCdShIn9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8XW6mgWSHE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YojyID8EYqA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}