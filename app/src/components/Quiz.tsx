import React from 'react';
import './Quiz.css';

export interface Props {
    question: string;
    answers: string[];
}

export const Quiz = ({ question, answers }: Props) => {
    // Make a `<div>` element for each answer.
    // `map` takes an array and makes a new array with the mapping function
    const answersButtons = answers.map((answer, idx) => {
        return (
            // when you make a list of elements, react really wants you to give
            // each element a unique `key`
            <button key={idx}>
                {answer}
            </button>
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
