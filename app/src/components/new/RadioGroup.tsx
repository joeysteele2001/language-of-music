import React from 'react';
import RadioButton from './RadioButton';

export interface Props {
    buttons: Array<{ id: string, label: string }>;
    name: string;

    checked?: string;
    legend?: string;
    disabled?: boolean;
    onChange?: (checked: string) => void;
}

export const RadioGroup = (props: Props) => {
    const { buttons, checked, name, legend, disabled, onChange } = props;

    const handleButtonChange = (checked: boolean, id: string) => {
        if (onChange && checked) {
            onChange(id);
        }
    };

    return (
        <fieldset disabled={disabled}>
            {legend && <legend>{legend}</legend>}

            {buttons.map(({ id, label }) => (
                <label key={id}>
                    <RadioButton
                        name={name}
                        checked={checked === id}
                        onChange={checked => handleButtonChange(checked, id)}
                    />
                    {label}
                </label>
            ))}
        </fieldset>
    );

};

export default RadioGroup;
