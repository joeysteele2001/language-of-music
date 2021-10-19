import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import JustListen from './components/JustListen';
import ListenandLearn from './components/ListenandLearn';
import PlayAlong from './components/PlayAlong';


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
            <JustListen />
          </Route>

          <Route path="/ListenandLearn">
            <ListenandLearn />
          </Route>

          <Route path="/PlayAlong">
            <PlayAlong />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
