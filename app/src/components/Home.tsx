import React from 'react';
import { Route, Link } from 'react-router-dom';
import YouTubePlayer from './YouTubePlayer';


const Home = () => {
    return (
        <main>
            <h1>Hello World!</h1>
            <p>This is the start of our app!</p>
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId="dQw4w9WgXcQ"
            />

            <Route exact path="/rickroll" component={YouTubePlayer} />
            <Link to="/rickroll">RICKROLL</Link>
        </main>
    );
};

export default Home;
