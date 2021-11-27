import React from 'react';

export interface Props {
    name?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const RadioButton = (props: Props) => {
    const { name, checked, onChange } = props;

    return (
        <input
            type="radio"
            name={name}
            checked={checked}
            onChange={onChange && ((evt) => onChange(evt.target.checked))}
        />
    );
};

export default RadioButton;
