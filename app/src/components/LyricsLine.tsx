import React, { useEffect } from 'react';
import './LyricsLine.css';

export interface Props {
    current?: boolean;
    children?: React.ReactNode;
}

export const LyricsLine = ({ current, children }: Props) => {
    const className = (current ? "LyricsLine-current" : "");

    useEffect(() => {
        console.log(`I am the current: ${children}`);
    }, [current, children]);

    return (
        <p className={className}>{children}</p>
    );
};

export default LyricsLine;
