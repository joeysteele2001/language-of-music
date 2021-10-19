import React from 'react';
import './AnswerButton.css';

export interface Props {
    /** The answer's inner components. */
    children: React.ReactNode;

    /** Whether the answer is correct. */
    correct: boolean;

    /** Is the button currently clicked? */
    clicked?: boolean;

    /** Function to run when the button is clicked. */
    onClick: () => void;
}

const AnswerButton = ({ children, correct, clicked = false, onClick }: Props) => {
    let className;
    if (clicked) {
        const color = correct ? "green" : "red";
        className = `AnswerButton-${color}`;
    } else {
        className = ""
    };

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default AnswerButton;
