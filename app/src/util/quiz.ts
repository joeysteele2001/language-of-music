import React from "react";

export type QuizQuestions = QuizQuestion[];

export type QuizQuestion = {
    questionText: React.ReactNode,
    answers: React.ReactNode[],
    correctAnswer: number,
};

export const randomizeQuiz = (questions: QuizQuestion[], numQuestions?: number): QuizQuestion[] => {
    return randomizeQuestions(questions).map(randomizeAnswerOrder);
};

export const randomizeQuestions = (questions: QuizQuestion[], numQuestions?: number): QuizQuestion[] => {
    return randomize(questions).slice(0, numQuestions);
};

export const randomizeAnswerOrder = (question: QuizQuestion): QuizQuestion => {
    const correct = question.answers[question.correctAnswer];
    const answers = randomize(question.answers);
    const correctAnswer = answers.findIndex(ans => ans === correct);
    return { ...question, answers, correctAnswer };
};

/** Randomize the order of `arr` in a new array. */
const randomize = <T>(arr: T[]): T[] => {
    const copy = arr.slice();
    shuffle(copy);
    return copy;
}

/** Shuffle the elements of `arr` (in-place). */
const shuffle = <T>(arr: T[]) => {
    // Use the Durstenfeld shuffle algorithm
    // adapted from a StackOverflow post (2450954)
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}
