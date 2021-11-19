import React from 'react';
import QuizzesSettings from './QuizzesSettings';

import RadioGroup from '../../input/RadioGroup';
import SmallCapsHeader from '../../pieces/SmallCapsHeader';
import ToggleSwitch from '../../input/ToggleSwitch';

import {
    parametersEqual,
    validatePreset,
    Settings as SettingsValues,
    DEFAULT_PRESET,
    PRESET_DEFAULTS,
} from '../../../util/settings';

export interface Props {
    onChange?: (settings: SettingsValues) => void;
}

export const Settings = (props: Props) => {
    const { onChange } = props;

    const [values, setValues] = React.useState(DEFAULT_PRESET);

    const handleChange = (newValues: SettingsValues) => {
        setValues(newValues);

        if (onChange) {
            onChange(newValues);
        }
    }

    const handlePresetChange = (raw: string) => {
        const presetName = validatePreset(raw);
        if (presetName) {
            const preset = PRESET_DEFAULTS[presetName];
            setValues(preset);
            handleChange(preset);
        }

    };

    const selectedPreset = () => {
        const selected = Object.values(PRESET_DEFAULTS).find((preset) => parametersEqual(values.parameters, preset.parameters));
        return selected?.preset;
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
                settings={values.parameters.quizzes}

                onChange={settings => handleChange({
                    ...values,
                    parameters: {
                        ...values.parameters,
                        quizzes: settings,
                    },
                })}
            />

            <ToggleSwitch
                checked={values.parameters.chords}
                label="Chords"
                onChange={chords => handleChange({
                    ...values,
                    parameters: {
                        ...values.parameters,
                        chords,
                    }
                })}
            />

            <ToggleSwitch
                checked={values.parameters.sideTranslation}
                label="Side Translation"
                onChange={sideTranslation => handleChange({
                    ...values,
                    parameters: {
                        ...values.parameters,
                        sideTranslation,
                    },
                })}
            />
        </>
    );
};

export default Settings;