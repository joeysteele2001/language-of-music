import React from 'react';
import './App.css';
import YouTubePlayer from './components/YouTubePlayer';

const App = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>This is the start of our app!</p>
      <YouTubePlayer
        id="music-video-player"
        title="Music Video Player"
        videoId="dQw4w9WgXcQ"
      />
    </main>
  );
}

export default App;
