import React from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
    return (
        <Quiz
            question={<><span style={{ color: 'magenta' }}>Select</span> answer</>}
            answers={[
                '1',
                <><span style={{ textTransform: 'uppercase' }}>Choose</span> <span style={{ color: 'red' }}>me</span><span>!</span></>,
                '3',
            ]}
            correctAnswer={1} />
    );
};

export default QuizPage;