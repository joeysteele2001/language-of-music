export type Settings = {
    preset?: PresetMode,
    parameters: Parameters,
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
    },

    'listen-learn': {
        preset: 'listen-learn',
        parameters: {
            quizzes: { enabled: true, level: 'beginner' },
            chords: false,
            sideTranslation: true,
        },
    },

    'play-along': {
        preset: 'play-along',
        parameters: {
            quizzes: { enabled: false },
            chords: true,
            sideTranslation: false,
        },
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
    export type Level = 'beginner' | 'advanced';

    export type Settings = {
        enabled: true,
        level: Level,
    } | {
        enabled: false,
    };

    export const validateLevel = (raw: string): Level | undefined => {
        switch (raw) {
            case 'beginner':
            case 'advanced':
                return raw;

            default:
                return undefined;
        }
    };

    export const settingsEqual = (a: Settings, b: Settings) => {
        if (a.enabled) {
            return b.enabled && a.level === b.level;
        }

        return !b.enabled;
    };
}

