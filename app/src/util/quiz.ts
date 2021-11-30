import React from "react";
import { randomize } from "./shuffle";

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
