import React from 'react';
import QuizzesSettings, { QuizLevel } from './QuizzesSettings';

import RadioGroup from './input/RadioGroup';
import SmallCapsHeader from './SmallCapsHeader';
import ToggleSwitch from './input/ToggleSwitch';

export interface Props {
    onChange?: (settings: SettingsValues) => void;
}

export const Settings = (props: Props) => {
    const { onChange } = props;

    const [values, setValues] = React.useState(presetDefaults[0].preset);

    const handleChange = (newValues: SettingsValues) => {
        if (onChange) {
            onChange(newValues);
        }
    }

    const handlePresetChange = (raw: string) => {
        const preset = presetDefaults.find(({ id }) => id === raw);
        if (preset) {
            setValues(preset.preset);
            handleChange(preset.preset);
        }

    };

    const selectedPreset = () => {
        const selected = presetDefaults.find(({ preset }) => valuesEqual(values, preset));
        return selected?.id;
    };

    return (
        <>
            <SmallCapsHeader>Settings</SmallCapsHeader>
            <RadioGroup
                name="preset"
                legend="Preset"
                buttons={[
                    { id: 'just-listen', label: 'Just Listen' },
                    { id: 'listen-learn', label: 'Listen & Learn' },
                    { id: 'play-along', label: 'Play Along' },
                ]}
                onChange={handlePresetChange}
                checked={selectedPreset()}
            />

            <QuizzesSettings
                settings={{
                    enabled: values.quizzes,
                    level: values.quizLevel,
                }}

                onChange={settings => setValues({
                    ...values,
                    quizzes: settings.enabled,
                    quizLevel: settings.level,
                })}
            />

            <ToggleSwitch
                checked={values.chords}
                label="Chords"
                onChange={chords => setValues({ ...values, chords })}
            />

            <ToggleSwitch
                checked={values.sideTranslation}
                label="Side Translation"
                onChange={sideTranslation => setValues({ ...values, sideTranslation })}
            />
        </>
    );
};

export type PresetMode = "just-listen" | "listen-learn" | "play-along";

export type SettingsValues = {
    preset?: PresetMode,
    quizzes: boolean,
    quizLevel: QuizLevel,
    chords: boolean,
    sideTranslation: boolean,
}

const valuesEqual = (a: SettingsValues, b: SettingsValues) => {
    if (a.quizLevel !== b.quizLevel
        || a.chords !== b.chords
        || a.sideTranslation !== b.sideTranslation) {
        return false;
    }

    if (a.quizzes) {
        return b.quizzes && a.quizLevel === b.quizLevel;
    }

    return a.quizLevel === b.quizLevel;
};

export const presetDefaults: Array<{ id: string, preset: SettingsValues }> = [
    {
        id: 'just-listen',
        preset: {
            preset: 'just-listen',
            quizzes: false,
            quizLevel: 'beginner',
            chords: false,
            sideTranslation: true,
        }
    },

    {
        id: 'listen-learn', preset: {
            preset: 'listen-learn',
            quizzes: true,
            quizLevel: 'beginner',
            chords: false,
            sideTranslation: true,
        }
    },

    {
        id: 'play-along', preset: {
            preset: 'play-along',
            quizzes: false,
            quizLevel: 'beginner',
            chords: true,
            sideTranslation: false,
        }
    },
];

export default Settings;