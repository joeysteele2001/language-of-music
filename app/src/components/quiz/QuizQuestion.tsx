import React from 'react';
import AnswerButton from './AnswerButton';
import './Quiz.css';

export interface Props {
    /** The quiz question text. */
    question: React.ReactNode;

    /** The quiz answers' texts. */
    answers: React.ReactNode[];

    /** Index of the correct answer. */
    correctAnswer: number;
}

export const QuizQuestion = ({ question, answers, correctAnswer }: Props) => {
    // state for the quiz
    const [feedback, setFeedback] = React.useState("");
    const [clicked, setClicked] = React.useState<undefined | number>(undefined);
    const [enabled, setEnabled] = React.useState(true);

    // the function that is called when a button is clicked
    // idx: the index of the button
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

    // reset the quiz to its initial state
    const resetQuiz = () => {
        setClicked(undefined);
        setFeedback("");
        setEnabled(true);
    }

    // Make a `<div>` element for each answer.
    // `map` takes an array and makes a new array with the mapping function
    const answersButtons = answers.map((answer, idx) => {
        const correct = idx === correctAnswer;

        return (
            // when you make a list of elements, react really wants you to give
            // each element a unique `key`
            <AnswerButton
                key={idx}
                correct={correct}
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

export default QuizQuestion;
