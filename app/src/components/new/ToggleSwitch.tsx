import React, { ChangeEvent } from 'react';

import './ToggleSwitch.css';

export interface Props {
    /** Force the checkbox to be checked / unchecked. */
    checked?: boolean;

    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export const ToggleSwitch = (props: Props) => {
    const { checked, defaultChecked, onChange, label } = props;

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(evt.target.checked);
        }
    };

    return (
        <label className="ToggleSwitch noselect">
            <input
                type="checkbox"
                onChange={handleChange}
                defaultChecked={defaultChecked}
                checked={checked}
            />
            <span className="ToggleSwitch-slider"></span>
            {label}
        </label>
    );
};

export default ToggleSwitch;
