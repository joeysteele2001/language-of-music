import React from 'react';
import './AnswerButton.css';

export interface Props {
    children: React.ReactNode;
    status: Status;
}

export type Status = "correct" | "incorrect";

const AnswerButton = ({ children, status }: Props) => {
    const [clicked, setClicked] = React.useState(false);

    let className;
    if (clicked) {
        const color = status === "correct" ? "green" : "red";
        className = `AnswerButton-${color}`;
    } else {
        className = "";
    }

    return (
        <button className={className} onClick={() => setClicked(true)}>
            {children}
        </button>
    )
};

export default AnswerButton;
