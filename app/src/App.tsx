import React from 'react';
import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
import SelectMode from './components/SelectMode';

const App = () => {
  return (
    <main className = "App">
      <h1>Hello World!</h1>
      <p>This is the start of our app!</p>
      <YouTubePlayer
        id="music-video-player"
        title="Music Video Player"
        videoId="dQw4w9WgXcQ"
      />
      <nav className = 'SelectMode'>
        <a href='./components/SelectMode'>Select Mode</a>
      </nav>
    </main>
  );
};

export default App;
