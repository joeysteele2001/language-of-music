import React from 'react';
import './SelectMode.css';
import { Link } from 'react-router-dom';

const SelectMode = () => {
  return (
    <main>
      <div className="SelectModeHeader">
        <h1>Select Mode</h1>
      </div>

      <div className="SelectMode">
        <div>
          <Link to="/JustListen">Just Listen</Link>
        </div>
        <div>
          <Link to="/ListenandLearn">Listen and Learn</Link>
        </div>
        <div>
          <Link to="/PlayAlong">Play Along</Link>
        </div>

      </div>
    </main>
  );
};


export default SelectMode;
