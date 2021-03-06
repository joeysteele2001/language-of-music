import React from 'react';
import { QuizQuestion as Question } from '../../util/quiz';
import TextView from '../pieces/TextView';
import AnswerButton from './AnswerButton';
import styles from './QuizQuestion.module.css';

const DEFAULT_PROMPT = "Choose the best answer.";

export interface Props {
    /** The quiz question text and answer info. */
    question: Question;

    /** Callback function called when the correct answer is selected.
     * 
     * If the first answer given was incorrect, then `correct` is `false`.
     */
    onAnswer?: (correct: boolean) => void;
}

export const QuizQuestion = ({ question, onAnswer }: Props) => {
    const { correctAnswer } = question;

    // state for the quiz
    const [feedback, setFeedback] = React.useState(DEFAULT_PROMPT);
    const [clicked, setClicked] = React.useState<undefined | number>(undefined);
    const [enabled, setEnabled] = React.useState(true);
    const [hasAnsweredWrong, setHasAnsweredWrong] = React.useState(false);

    // the function that is called when a button is clicked
    // idx: the index of the button
    const handleClick = (idx: number) => {
        if (!enabled) {
            return;
        }

        setEnabled(false);
        setClicked(idx);

        if (idx === correctAnswer) {
            handleCorrect();
        } else {
            handleIncorrect();
        }

    }

    const handleCorrect = () => {
        setFeedback("Correct!");
        if (onAnswer) {
            setTimeout(() => {
                onAnswer(!hasAnsweredWrong);
                resetQuiz();
                setHasAnsweredWrong(false);
            }, 1000);
        }
    };

    const handleIncorrect = () => {
        setFeedback("Incorrect.");
        setHasAnsweredWrong(true);
        setTimeout(resetQuiz, 1500);
    };

    // reset the quiz to its initial state
    const resetQuiz = () => {
        setClicked(undefined);
        setFeedback(DEFAULT_PROMPT);
        setEnabled(true);
    }

    // Make a `<div>` element for each answer.
    // `map` takes an array and makes a new array with the mapping function
    const answersButtons = question.answers.map((answer, idx) => {
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
                <TextView text={answer} />
            </AnswerButton>
        );
    });

    const questionText = <TextView text={question.questionText} />;

    // the actual quiz component's elements
    return (
        <div className={styles.Quiz}>
            <div className={styles.question}>{questionText}</div>
            <div className={styles.feedback}>{feedback}</div>
            <div className={styles.answers}>{answersButtons}</div>
        </div>
    );
};

export default QuizQuestion;
