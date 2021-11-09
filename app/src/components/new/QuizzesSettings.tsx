import React from 'react';

import ToggleSwitch from './input/ToggleSwitch';
import RadioGroup from './input/RadioGroup';

import { quiz } from '../../util/settings';

export interface Props {
    settings: quiz.Settings,

    onChange?: (newSettings: quiz.Settings) => void,
}

export const QuizzesSettings = (props: Props) => {
    const { settings, onChange } = props;

    const handleEnableChange = (enabled: boolean) => {
        if (onChange) {
            if (enabled) {
                onChange({ enabled: true, level: 'beginner' });
            } else {
                onChange({ enabled: false });
            }
        }
    };

    const handleLevelChange = (level: string) => {
        if (onChange) {
            const validated = quiz.validateLevel(level);
            if (validated) {
                if (settings.enabled) {
                    onChange({ enabled: true, level: validated });
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
                buttons={[
                    { id: 'beginner', label: 'Beginner' },
                    { id: 'advanced', label: 'Advanced' },
                ]}
                checked={settings.enabled ? settings.level : 'beginner'}
                disabled={!settings.enabled}
                onChange={handleLevelChange}
            />
        </div>
    );
};

export default QuizzesSettings;
