import React from 'react';

import ToggleSwitch from '../../input/ToggleSwitch';
import RadioGroup from '../../input/RadioGroup';

import { quiz } from '../../../util/settings';
import { difficultyNames, parseDifficulty } from '../../../util/vocab';

export interface Props {
    settings: quiz.Settings,

    onChange?: (newSettings: quiz.Settings) => void,
}

const difficulties = Object.entries(difficultyNames)
    .filter(([k]) => k !== "unknown")
    .map(([id, label]) => { return { id, label } });

export const QuizzesSettings = (props: Props) => {
    const { settings, onChange } = props;

    const handleEnableChange = (enabled: boolean) => {
        if (onChange) {
            if (enabled) {
                onChange({ enabled: true, difficulty: 'beg' });
            } else {
                onChange({ enabled: false });
            }
        }
    };

    const handleDiffChange = (difficulty: string) => {
        if (onChange) {
            const validated = parseDifficulty(difficulty);
            if (validated) {
                if (settings.enabled) {
                    onChange({ enabled: true, difficulty: validated });
                }
            }
        }
    };

    return (
        <div>
            <label>
                <ToggleSwitch
                    checked={settings.enabled}
                    label="Quizzes"
                    onChange={handleEnableChange}
                />
            </label>

            <RadioGroup
                name="quiz-level"
                buttons={difficulties}
                checked={settings.enabled ? settings.difficulty : 'beg'}
                disabled={!settings.enabled}
                onChange={handleDiffChange}
            />
        </div>
    );
};

export default QuizzesSettings;
