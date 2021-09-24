import React from 'react';
import AnswerButton from './AnswerButton';
import './Quiz.css';

export interface Props {
    question: string;
    answers: string[];
}

export const Quiz = ({ question, answers }: Props) => {
    // Make a `<div>` element for each answer.
    // `map` takes an array and makes a new array with the mapping function

    const answersButtons = answers.map((answer, idx) => {

        let status: "correct" | "incorrect";
        if (idx === 3) {
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
            >
                {answer}
            </AnswerButton>
        );
    });

    // the actual quiz component's elements
    return (
        <div className="Quiz">
            <div className="Quiz-question">{question}</div>
            <div className="Quiz-feedback"></div>
            <div className="Quiz-answers">{answersButtons}</div>
        </div>
    );
};

export default Quiz;
