import { randomize } from "./shuffle";
import { AnnotatedText } from "./text";

export type QuizQuestions = QuizQuestion[];

export type QuizQuestion = {
    questionText: QuizText,
    answers: QuizText[],
    correctAnswer: number,
};

export type QuizText = string | AnnotatedText;

export const randomizeQuiz = (questions: QuizQuestion[], numQuestions?: number): QuizQuestion[] => {
    return randomizeQuestions(questions, numQuestions).map(randomizeAnswerOrder);
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
