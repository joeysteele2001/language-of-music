import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
<<<<<<< HEAD
import Lyrics from './components/Lyrics';

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
      <Lyrics />
    </main>
=======
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rickroll">Rickroll</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/rickroll">
          <YouTubePlayer
            id="music-video-player"
            title="Music Video Player"
            videoId="dQw4w9WgXcQ"
          />
        </Route>
      </Switch>


    </BrowserRouter>
>>>>>>> master
  );
}

export default App;
