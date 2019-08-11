import React, { Component } from 'react';
import garden from './img/garden-2018.png';
import mexicanPlum from './img/mexican-plum-06-02-2019.jpeg';
import watermelonTrellis from './img/watermelon-trellis-06-02-2019.jpeg';
import backPatio from './img/back-patio-05-27-2019.jpeg';
import backWild from './img/back-wild-05-27-2019.jpeg';
import backClean from './img/back-clean-05-27-2019.jpeg';
import orangePicked from './img/orange_picked.png';
import orangeOpen from './img/orange_open.png';

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
                <img src={garden} alt="Garden" style={{height: '300px'}}/>
                <span class="garden-blog-entry">
                    <h5>June 2nd, 2019</h5>
                    <p>Garden updates! Digging holes and building a trellis.</p>
                    <p>I planted this mexican plum tree in my front yard. When they cut down my china berry they gave me this one as a replacement. I've had it in a large teracotta since receiving it. I'm glad it survived the winter and sprouted a whole new branch which will likely become the main.</p>
                    <p>We'll see how it does in this soil and sun. I made a mixture of the native soil on this plot, some tree & shrub mix, as well as store bought in-ground garden soil. It drains pretty quick. It's sitting on the Southwest corner of my lot which gets a heavy exposure of afternoon sun.</p>
                    <img src={mexicanPlum} style={{height: '300px'}}></img>
                    <p>I made an addition to the watermelon trellis so that they can climb higher! I'm using recycled wood from my old sofa that I tore down and threw away. The trellis is screwed together and to the cedar planks of the bed. I cut the metal garden fence and stapled it to the trellis.</p>
                    <img src={watermelonTrellis} style={{height: '300px'}}></img>
                </span>
                <span style={{'padding': '10px'}}>
                    <h5>May 27th, 2019</h5>
                    <p>Happy Memorial Day! Got to spend a solid chunk of time in the garden today which I'm grateful for.</p>
                    <p>The cannas are in bloom, I like the palm back here too. :)</p>
                    <img src={backPatio} style={{height: '300px'}} ></img>
                    <p>These watermelons are growing fast. I make sure to keep them watered and installed a wire structure for 
                    them to climb.</p>
                    <p>The backyard on south east corner of the lot was completely overgrown with plants!</p>
                    <img src={backWild} style={{height: '300px'}} ></img>
                    <p>I found using the rake to ball up the plants while pulling out the roots from underneath to be an effective method.</p>
                    <img src={backClean} style={{height: '300px'}} ></img>
                </span>
                <span style={{'padding': '10px'}}>
                    <h5>May 5th, 2019</h5>
                    <p>I'm grateful to the gardener before me who planted an orange tree on this property. Yard work always causes me to break a sweat. Visiting this orange tree and eating the fruit is pretty nice.</p>
                    <img src={orangePicked} style={{height: '300px'}} ></img>
                    <img src={orangeOpen} style={{height: '300px'}} ></img>
                </span>
            </div>
        )
    }
}