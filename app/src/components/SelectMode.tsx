import React from 'react';
import './SelectMode.css';
import JustListen from './JustListen';
import PlayAlong from './PlayAlong';
import ListenandLearn from './ListenandLearn';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

const SelectMode = () => {
return (
    <main>
    <h1>Select Mode</h1>

    <BrowserRouter>
      <div className= "SelectMode">
        <div>
        <Link to="/JustListen">JustListen</Link>
        </div>
        <div>
        <Link to="/ListenandLearn">ListenandLearn</Link>
        </div>
        <div>
        <Link to="/PlayAlong">PlayAlong</Link>
        </div>

      </div>
    
    <Switch>
    
        <Route exact path="/JustListen">
          <JustListen />
        </Route>

        <Route exact path="/ListenandLearn">
          <ListenandLearn />
        </Route>
        <Route exact path="/PlayAlong">
          <PlayAlong />
        </Route>
      </Switch>

      </BrowserRouter>

    </main>
);
};


export default SelectMode;
