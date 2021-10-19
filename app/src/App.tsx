import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SongPage from './components/SongPage';


const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Link to="/home"><button>Home</button></Link>

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
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
