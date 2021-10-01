import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import JustListen from './components/JustListen';
import Home from './components/Home';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/justlisten">Just Listen</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/justlisten">
          <JustListen />
        </Route>

        <Route exact path="/quiz">
          <Quiz
            question="Question"
            answers={["Answer 1", "Answer 2", "Answer 3", "I'm the correct answer", "Answer 5"]}
            correctAnswer={3}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
