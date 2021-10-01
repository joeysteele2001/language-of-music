import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const JustListen = () => {
    return (
        <main>
            <h1>Song Title</h1>
            <YouTubePlayer
            id="music-video-player"
            title="Music Video Player"
            videoId="dQw4w9WgXcQ"
            />
            <p>Lyrics here</p>
        </main>
        
    );
  };
  
  export default JustListen;
  