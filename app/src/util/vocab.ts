import { AnnotatedText } from "./text";

import gurenge from '../resources/vocab/gurenge.json';
import pretender from '../resources/vocab/pretender.json';
import yoru from '../resources/vocab/yoru-ni-kakenu.json';
import falling from '../resources/vocab/falling-in-love.json';

import { QuizQuestion, QuizQuestions } from "./quiz";
import { randomize } from "./shuffle";

export type VocabList = VocabWord[];

export type VocabWord = {
    word: AnnotatedText,
    defn: AnnotatedText,
    difficulty: Difficulty,
};

export type Difficulty = "beg" | "int" | "adv" | "unknown";

export const difficultyNames: Record<Difficulty, string> = {
    "beg": "Beginner",
    "int": "Intermediate",
    "adv": "Advanced",
    "unknown": "Unknown",
};

export const difficultyLevels: Record<Difficulty, number> = {
    "beg": 1,
    "int": 2,
    "adv": 3,
    "unknown": -Infinity,
};

export const parseDifficulty = (diff: string): Difficulty => {
    const difficulty = Object.keys(difficultyNames).find(d => d === diff);
    return (difficulty || "unknown") as Difficulty;
};

type RawVocabWord = {
    word: AnnotatedText,
    defn: AnnotatedText,
    difficulty: string,
}

const parseVocabList = (list: RawVocabWord[]): VocabList => {
    return list.map(word => {
        const difficulty = parseDifficulty(word.difficulty);
        return { ...word, difficulty };
    });
};

export const GURENGE_VOCAB = parseVocabList(gurenge);
export const PRETENDER_VOCAB = parseVocabList(pretender);
export const YORU_VOCAB = parseVocabList(yoru);
export const FALLING_VOCAB = parseVocabList(falling);

export const generateQuiz = (list: VocabList, difficulty: Difficulty, numQuestions: number = 5): QuizQuestions => {
    const vocab = vocabAtOrBelowDifficulty(list, difficulty).slice(0, numQuestions);
    return listToQuiz(vocab);
}

export const vocabAtDifficulty = (list: VocabList, difficulty: Difficulty): VocabList => {
    const level = difficultyLevels[difficulty];
    return list.filter(word => difficultyLevels[word.difficulty] === level);
};

export const vocabAtOrBelowDifficulty = (list: VocabList, difficulty: Difficulty): VocabList => {
    const level = difficultyLevels[difficulty];
    return list.filter(word => difficultyLevels[word.difficulty] <= level);
};

export const listToQuiz = (list: VocabList): QuizQuestions => {
    return list.map(word => wordToQuizQuestion(list, word));
};

const wordToQuizQuestion = (list: VocabList, word: VocabWord): QuizQuestion => {
    const NUM_ANSWERS = 4;
    const answers = randomize(list).slice(0, NUM_ANSWERS - 1).map(word => word.defn);
    answers.push(word.defn);

    return {
        questionText: word.word,
        answers,
        correctAnswer: NUM_ANSWERS - 1,
    };
};
