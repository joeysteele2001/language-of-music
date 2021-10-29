import React from 'react';

export interface Props {
    name?: string;
    checked?: boolean;
}

export const RadioButton = (props: Props) => {
    const { name, checked } = props;

    return (
        <input
            type="radio"
            name={name}
            defaultChecked={checked}
        />
    );
};

export default RadioButton;
