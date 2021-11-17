import React, {useState} from 'react';
import TranslationPopUp from './TranslationPopUp';
import translate from './translate';

export interface Props {
  line: any
}

function PopUpFunction(props:Props) {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return <div>
    <input
      className = "LyricButton"
      value = {props.line}
      onClick={togglePopup}
    />
        {isOpen && <TranslationPopUp
      content={<>
        <b>{props.line}</b>
       {translate(props.line)}
      </>}
      handleClose={togglePopup}
    />}
  </div>
  
}
 
export default PopUpFunction;