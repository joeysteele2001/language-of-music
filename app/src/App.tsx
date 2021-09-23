import React from 'react';
import './App.css';

const App = () => {
  return (
    <main>
      <h1>Hello World!</h1>
      <p>This is the start of our app!</p>
      <YouTubePlayer />
    </main>
  );
}

const YouTubePlayer = () => {
  return (
    <iframe id="music-vid-player" title="Never Gonna Give You Up" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
  );
};

export default App;
