import React from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
    return (
        <Quiz question="Select answer" answers={['1','2','3']} correctAnswer={1}/>
    );
};

export default QuizPage;