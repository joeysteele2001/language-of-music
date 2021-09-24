import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import YouTubePlayer from './components/YouTubePlayer';
import Home from './components/Home';
import SelectMode from './components/SelectMode';

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
          <li>
            <Link to="/SelectMode">Select Mode</Link>
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
        <Route exact path="/SelectMode">
          <SelectMode />
        </Route>
      </Switch>


    </BrowserRouter>
  );
};

export default App;
