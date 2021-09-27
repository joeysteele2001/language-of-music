import React, { useEffect } from 'react';
import './LyricsLine.css';

export interface Props {
    /** Is this the currently playing line of lyrics within its song? */
    current?: boolean;

    /** The lyrics content. */
    children?: React.ReactNode;
}

/** A line of lyrics that may or may not be "current". */
export const LyricsLine = ({ current, children }: Props) => {
    const className = (current ? "LyricsLine-current" : "");

    let ref: React.RefObject<HTMLParagraphElement> | undefined;

    // create `ref`(erence) to the active `<p>` node so we can scroll to it
    if (current) {
        ref = React.createRef<HTMLParagraphElement>();
    }

    // scroll this element into view if it's the current one
    // this function runs whenever the element loads or is updated
    useEffect(() => {
        if (current) {
            ref?.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [current, ref]);

    return (
        <p className={className} ref={ref}>{children}</p>
    );
};

export default LyricsLine;
