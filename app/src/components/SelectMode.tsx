import React from 'react';
import './SelectMode.css';
import { Link } from 'react-router-dom';

import Button from './Button';

const SelectMode = () => {
  return (
    <main>
      <div className="SelectModeHeader">
        <h1>Select Mode</h1>
      </div>

      <div className="SelectMode">
        <Button>
          <Link to="/JustListen">Just Listen</Link>
        </Button>
        <Button>
          <Link to="/ListenandLearn">Listen and Learn</Link>
        </Button>
        <Button>
          <Link to="/PlayAlong">Play Along</Link>
        </Button>

      </div>
    </main>
  );
};


export default SelectMode;
