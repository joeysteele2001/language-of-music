import React from 'react';

export interface Props {
    /** The slider's value, from 0 (leftmost) to 1 (rightmost). */
    value?: number;

    /** Callback function to run when the slider's value changes.
     * 
     * `value` will be a number from 0 (leftmost) to 1 (rightmost).
     */
    onChange?: (value: number) => void;
}

export const Scrubber = (props: Props) => {
    const { onChange } = props;
    const value = props.value || 0;

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const valueString = evt.target.value;
            const valueNum = parseFloat(valueString);

            onChange(valueNum);
        }
    };

    return <input
        type="range"
        min={0}
        max={1}
        value={value}
        step="any"
        onChange={handleChange}
    />;
};

export default Scrubber;
