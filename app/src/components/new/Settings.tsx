import React from 'react';
import QuizzesSettings from './QuizzesSettings';

import RadioGroup from './RadioGroup';
import SmallCapsHeader from './SmallCapsHeader';
import ToggleSwitch from './ToggleSwitch';

export const Settings = () => {
    return (
        <>
            <SmallCapsHeader>Settings</SmallCapsHeader>
            <RadioGroup
                name="preset"
                legend="Preset"
                buttons={['Just Listen', 'Listen & Learn', 'Play Along']}
            />

            <QuizzesSettings />

            <label>
                <ToggleSwitch />
                Chords
            </label>
            <div>
                <ToggleSwitch />
                Side Translation
            </div>
        </>
    );
};

type PresetMode = "just-listen" | "listen-learn" | "play-along";
type QuizLevel = "beginner" | "advanced";

type SettingsValues = {
    preset?: PresetMode,
    quizzes: boolean,
    quizLevel: QuizLevel,
    chords: boolean,
    sideTranslation: boolean,
}

const presetDefaults = {
    'just-listen': {
        preset: 'just-listen',
        quizzes: false,
        quizLevel: 'beginner',
        chords: false,
        sideTranslation: true,
    },

    'listen-learn': {
        preset: 'listen-learn',
        quizzes: true,
        quizLevel: 'beginner',
        chords: false,
        sideTranslation: true,
    },

    'play-along': {
        preset: 'play-along',
        quizzes: false,
        quizLevel: 'beginner',
        chords: true,
        sideTranslation: false,
    },
};

export default Settings;