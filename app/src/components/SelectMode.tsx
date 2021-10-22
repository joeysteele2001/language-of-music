import React, {useState} from 'react';
import './SelectMode.css';
import { Link } from 'react-router-dom';
import TranslationPopUp from './TranslationPopUp';

function SelectModePopUp() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return <div>
  <input
    className = "SelectMode"
    value = 'Select Mode'
    onClick={togglePopup}
  />
      {isOpen && <TranslationPopUp
    content={<>
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
    </>}
    handleClose={togglePopup}
  />}
</div>
}

export default SelectModePopUp;
