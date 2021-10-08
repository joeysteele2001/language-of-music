import React from 'react';
import './TranslationPopUp.css';

const TranslationPopUp = (props: { handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; content: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default TranslationPopUp;