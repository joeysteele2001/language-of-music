import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ColorPalette from './components/ColorPalette';
import Quiz from './components/Quiz';

const App = () => {
  return (
  <main>
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
          <li>
            <Link to="/colors">Colors</Link>
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

        <Route exact path="/colors">
          <ColorPalette />
        </Route>
      </Switch>
    </BrowserRouter>
 
  </main>
  );
};

export default App;
