import React from 'react';
import './App.css';
import JustListen from './components/JustListen';
import Home from './components/Home';
import Quiz from './components/Quiz';

import Switcher from './components/Switcher';

const App = () => {
  const [page, setPage] = React.useState(0);

  return (
    <main>
      <nav>
        <ul>
          {pages.map((page, idx) => (
            <li key={page.name}>
              <button className="button-link" onClick={() => setPage(idx)}>
                {page.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Switcher activeView={page}>
        {pages.map(page => page.component)}
      </Switcher>
    </main >
  );
}

const pages = [
  { name: "Home", component: <Home /> },
  { name: "Just Listen", component: <JustListen /> },
  {
    name: "Quiz",
    component: <Quiz
      question="Question"
      answers={["Answer 1", "Answer 2", "Answer 3", "I'm the correct answer", "Answer 5"]}
      correctAnswer={3}
    />
  },
];

export default App;
