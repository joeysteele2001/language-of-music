import React from 'react';
import AnswerButton, { Status } from './AnswerButton';
import './Quiz.css';

export interface Props {
    question: string;
    answers: string[];

    /** Index of the correct answer. */
    correctAnswer: number;
}

export const Quiz = ({ question, answers, correctAnswer }: Props) => {
    const [feedback, setFeedback] = React.useState("");
    const [clicked, setClicked] = React.useState<undefined | number>(undefined);
    const [enabled, setEnabled] = React.useState(true);

    const handleClick = (idx: number) => {
        if (!enabled) {
            return;
        }

        setEnabled(false);
        setClicked(idx);

        if (idx === correctAnswer) {
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect.");
            setTimeout(resetQuiz, 1500);
        }

    }

    const resetQuiz = () => {
        setClicked(undefined);
        setFeedback("");
        setEnabled(true);
    }

    // Make a `<div>` element for each answer.
    // `map` takes an array and makes a new array with the mapping function
    const answersButtons = answers.map((answer, idx) => {
        let status: Status;
        if (idx === correctAnswer) {
            status = "correct";
        } else {
            status = "incorrect";
        }

        return (
            // when you make a list of elements, react really wants you to give
            // each element a unique `key`
            <AnswerButton
                key={idx}
                status={status}
                clicked={clicked === idx}
                onClick={() => handleClick(idx)}
            >
                {answer}
            </AnswerButton>
        );
    });

    // the actual quiz component's elements
    return (
        <div className="Quiz">
            <div className="Quiz-question">{question}</div>
            <div className="Quiz-feedback">{feedback}</div>
            <div className="Quiz-answers">{answersButtons}</div>
        </div>
    );
};

export default Quiz;
