import React from 'react';
import { Route } from 'react-router-dom';
import YouTubePlayer from './YouTubePlayer';
import JustListen from './JustListen';

const Home = () => {
    return (
        <main>
            <h1>Hello World!</h1>
            <p>This is the start of our app!</p>

            <Route exact path="/rickroll" component={YouTubePlayer} />
            <Route exact path="/justlisten" component={JustListen} />
        </main>
    );
};



export default Home;
