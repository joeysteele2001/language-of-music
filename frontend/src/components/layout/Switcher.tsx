import React from 'react';

export interface Props {
    /** The index of the active view in the switch. */
    activeView: number;

    /** The views to switch between. */
    children: React.ReactNode[];
}

const Switcher = ({ activeView, children }: Props) => {
    // Simply return the `n`th child element, wrapped in a "fragment" using `<>` and `</>`
    return <>{children[activeView]}</>;
};

export default Switcher;
