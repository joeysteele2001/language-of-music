import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ColorPalette from './components/ColorPalette';
import SongPage from './components/SongPage';
import ToggleSwitch from './components/new/input/ToggleSwitch';
import YouTubePlayer from './components/YouTubePlayer';
import Main from './components/new/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-home">
          <Main />
        </Route>

        <Route path="/new-songpage">
          <Main />
        </Route>

        <Route path="/youtube-demo">
          <YouTubePlayer
            id="music-video"
            title="Gurenge"
            videoId="_IkopJwRDKU"
          />
        </Route>
      </Switch>

      <nav className="dev">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/colors">Color Palette</Link></li>
          <li><Link to="/components">Components Demo</Link></li>
          <li><Link to="/new-home">New Home</Link></li>
          <li><Link to="/new-songpage">New Song Page</Link></li>
          <li><Link to="/youtube-demo">YouTube Player Demo</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/JustListen">
          <SongPage mode="JustListen" />
        </Route>

        <Route path="/ListenandLearn">
          <SongPage mode="ListenLearn" />
        </Route>

        <Route path="/PlayAlong">
          <SongPage mode="PlayAlong" />
        </Route>

        <Route path="/colors">
          <ColorPalette />
        </Route>

        <Route path="/components">
          <ToggleSwitch onChange={(checked) => console.log(`checked: ${checked}`)} label="Click me!" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
