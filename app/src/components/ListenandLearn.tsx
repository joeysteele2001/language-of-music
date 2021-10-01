import React from 'react';
import YouTubePlayer from './YouTubePlayer';

const ListenandLearn = () => {
    return (
        <main>
        <h1>Song Title</h1>

        <YouTubePlayer
            id="music-video-player"
            title="Music Video Player"
            videoId="dQw4w9WgXcQ"
        />
        <p>Lyrics Here</p>
        <p>Link to Quiz Here</p>
        </main>
    );
  };
  
  export default ListenandLearn;