import React from 'react';

import ToggleSwitch from './input/ToggleSwitch';
import RadioGroup from './input/RadioGroup';

export type QuizLevel = "beginner" | "advanced";

const validateLevel = (raw: string): QuizLevel | undefined => {
    switch (raw) {
        case "beginner":
        case "advanced":
            return raw;

        default:
            return undefined;
    }
}

export type Settings = {
    enabled: boolean,
    level: QuizLevel,
}

export interface Props {
    settings: Settings,

    onChange?: (newSettings: Settings) => void,
}

export const QuizzesSettings = (props: Props) => {
    const { settings, onChange } = props;

    const handleEnableChange = (enabled: boolean) => {
        if (onChange) {
            onChange({ ...settings, enabled })
        }
    };

    const handleLevelChange = (level: string) => {
        if (onChange) {
            const validated = validateLevel(level);
            if (validated) {
                onChange({ ...settings, level: validated })
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
                checked={settings.level}
                disabled={!settings.enabled}
                onChange={handleLevelChange}
            />
        </div>
    );
};

export default QuizzesSettings;
