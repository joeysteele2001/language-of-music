import React from 'react';

import { QuizQuestion as Question, randomizeQuiz } from '../../util/quiz';
import QuizQuestion from './QuizQuestion';

import styles from './Quiz.module.css';
import ProgressBar from '../pieces/ProgressBar';

export interface Props {
    /** The questions to give in the quiz.
     * 
     * These *will* be randomized in the component.
     */
    questions: Question[];
}

export const Quiz = (props: Props) => {
    const [current, setCurrent] = React.useState(0);
    const [numCorrect, setNumCorrect] = React.useState(0);
    const [questions, setQuestions] = React.useState(() => randomizeQuiz(props.questions));

    // update `questions` *only if* `props.questions` changes
    React.useEffect(() => setQuestions(randomizeQuiz(props.questions)), [props.questions]);

    const numQuestions = questions.length;
    const done = current >= numQuestions;

    const handleAnswer = (correct: boolean) => {
        if (correct) {
            setNumCorrect((n) => n + 1);
        }

        setCurrent((c) => c + 1);
    };

    const statusText = `Question ${done ? numQuestions : current + 1} of ${numQuestions}`;

    let body;
    if (done) {
        const score = Math.round(numCorrect / numQuestions * 100);
        body = `Quiz finished! Score: ${score}%.`;
    } else {
        body = <QuizQuestion question={questions[current]} onAnswer={handleAnswer} />;
    }

    return (
        <div className={styles.Quiz}>
            <div className={styles.header}>
                <h2>Quiz</h2>
                <div className={styles.status}>
                    <ProgressBar value={current} max={numQuestions} />&nbsp;
                    {statusText}
                </div>
            </div>
            {body}
        </div>
    );
};

export default Quiz;