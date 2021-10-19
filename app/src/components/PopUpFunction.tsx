import React, {useState} from 'react';
import TranslationPopUp from './TranslationPopUp';

function PopUpFunction() {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return <div>
    <input
      className = "LyricButton"
      value = 'lyrics here'
      onClick={togglePopup}
    />
        {isOpen && <TranslationPopUp
      content={<>
        <b>Selected Lyrics</b>
        <p>Translation Here</p>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default PopUpFunction;