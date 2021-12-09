import { Difficulty } from "./vocab";

export type Settings = {
    preset?: PresetMode,
    parameters: Parameters,
    autostart: boolean,
};

export type Parameters = {
    quizzes: quiz.Settings,
    chords: boolean,
    sideTranslation: boolean,
};

export declare namespace quiz { };

export const parametersEqual = (a: Parameters, b: Parameters) => {
    return a.chords === b.chords &&
        a.sideTranslation === b.sideTranslation &&
        quiz.settingsEqual(a.quizzes, b.quizzes);
};

export type PresetMode = 'just-listen' | 'listen-learn' | 'play-along';

export const PRESET_NAMES: Record<PresetMode, string> = {
    'just-listen': 'Just Listen',
    'listen-learn': 'Listen and Learn',
    'play-along': 'Play Along',
};

export const PRESET_DEFAULTS: Record<PresetMode, Settings> = {
    'just-listen': {
        preset: 'just-listen',
        parameters: {
            quizzes: { enabled: false },
            chords: false,
            sideTranslation: true,
        },
        autostart: false,
    },

    'listen-learn': {
        preset: 'listen-learn',
        parameters: {
            quizzes: { enabled: true, difficulty: 'beg' },
            chords: false,
            sideTranslation: true,
        },
        autostart: false,
    },

    'play-along': {
        preset: 'play-along',
        parameters: {
            quizzes: { enabled: false },
            chords: true,
            sideTranslation: false,
        },
        autostart: false,
    },
};

export const DEFAULT_PRESET: Settings = PRESET_DEFAULTS['just-listen'];

export const validatePreset = (raw: string): PresetMode | undefined => {
    switch (raw) {
        case 'just-listen':
        case 'listen-learn':
        case 'play-along':
            return raw;
        default:
            return undefined;
    }
};

export namespace quiz {
    export type Settings = {
        enabled: true,
        difficulty: Difficulty,
    } | {
        enabled: false,
    };

    export const settingsEqual = (a: Settings, b: Settings) => {
        if (a.enabled) {
            return b.enabled && a.difficulty === b.difficulty;
        }

        return !b.enabled;
    };
}

