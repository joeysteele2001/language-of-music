import React from 'react';
import './AnswerButton.css';

export interface Props {
    children: React.ReactNode;
    status: Status;
    clicked?: boolean;
    onClick: () => void;
}

export type Status = "correct" | "incorrect";

const AnswerButton = ({ children, status, clicked = false, onClick }: Props) => {
    let className;
    if (clicked) {
        const color = status === "correct" ? "green" : "red";
        className = `AnswerButton-${color}`;
    } else {
        className = "";
    }

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
};

export default AnswerButton;
