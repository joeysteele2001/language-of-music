import React from 'react';
import AnswerButton from './AnswerButton';
import './Quiz.css';
import '../../questionList.html'

export interface Props {
    /** The quiz question text. */
    question: string;

    /** The quiz answers' texts. */
    answers: string[];

    /** Index of the correct answer. */
    correctAnswer: number;
}

export const Quiz = ({ question, answers, correctAnswer }: Props) => {
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

    // randomize position of the correct answer
    const randomizeOrder = () => {
        let myIndex = Math.floor(Math.random() * 5); // randomized index for correct answer, 1-4
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../../questionList.html')
        // how to load one question at a time?
        let current = 1;
        xhr.onreadystatechange = () => { // onload?
            let currentQuestion = document.getElementById("q" + current.toString());
            var lines = currentQuestion?.innerHTML
            // question is the first line of the div; second line is the correct answer
            question = currentQuestion?.getElementsByTagName("question").toString() ?? 'string';
            let i = 1;
            while (i < 5) { // for each of the four answer choices
                if (i == myIndex) {
                    // assign the correct answer choice to the randomly generated index
                    answers[i-1] = currentQuestion?.querySelectorAll('*')[i-1];
                    correctAnswer = myIndex;
                } else {
                    // assign the other answer choices to the remaining answer choice indices
                    answers[i-1] = currentQuestion?.querySelectorAll('*')[i-1];
                }
                i++;
            }
            if (current < 5) { // total number of questions
                current++;
            }
        };
    }
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

export default Quiz;
