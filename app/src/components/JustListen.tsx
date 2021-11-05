import React from 'react';
import Lyrics from './Lyrics';
import YouTubePlayer from './YouTubePlayer';


const JustListen = () => {
    return (
        <div className="JustListen">
            <h1>Song Title</h1>
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId="dQw4w9WgXcQ"
            />
            <Lyrics times={exampleTimes}>
                {exampleLyrics}
            </Lyrics>
        </div>
    );
};

export default JustListen;

const exampleLyrics = `
Never gonna give you up
Never gonna let you down
`
    .split('\n');

const exampleTimes = Array.from(Array(exampleLyrics.length).keys())
    .map(i => (i ** 1.7) * 10);