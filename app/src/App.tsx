import React from 'react';
import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
import Quiz from './components/Quiz';

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
      <Quiz
        question="Question"
        answers={["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"]}
      />
    </main>
  );
}

export default App;
