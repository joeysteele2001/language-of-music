import React from 'react';
import RadioButton from './RadioButton';

export interface Props {
    buttons: string[];
    name: string;

    defaultChecked?: number;
    legend?: string;
    disabled?: boolean;
}

export const RadioGroup = (props: Props) => {
    const { buttons, name, legend, disabled, defaultChecked } = props;

    return (
        <fieldset disabled={disabled}>
            {legend && <legend>{legend}</legend>}

            {buttons.map((text, idx) => (
                <label key={idx}>
                    <RadioButton
                        name={name}
                        checked={defaultChecked === idx}
                    />
                    {text}
                </label>
            ))}
        </fieldset>
    );

};

export default RadioGroup;
