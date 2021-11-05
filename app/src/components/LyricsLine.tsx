import React, { useEffect } from 'react';
import './LyricsLine.css';

// TODO: test LyricsLine with Japanese `<ruby>` elements

export interface Props {
    /** Is this the currently playing line of lyrics within its song? */
    current?: boolean;

    /** The lyrics content. */
    children?: React.ReactNode;
}

/** A line of lyrics that may or may not be "current". */
export const LyricsLine = ({ current, children }: Props) => {
    const className = current ? "LyricsLine LyricsLine-current" : "LyricsLine";

    let ref: React.RefObject<HTMLParagraphElement> | undefined;

    // create `ref`(erence) to the active `<p>` node so we can scroll to it
    if (current) {
        ref = React.createRef<HTMLParagraphElement>();
    }

    // scroll this element into view if it's the current one
    // this function runs whenever the element loads or is updated
    useEffect(() => {
        if (current && ref?.current) {
            // `scrollIntoView()` doesn't give any option to offset it
            // so we get to do the pixel calculations from scratch!
            // we'll keep 2 lines of lyrics above the current line

            // the parent scrolling `<div>` that this line lives in
            const parent = ref.current.parentElement!;

            // get the y-coordinate of this line, relative to the top of the lyrics view
            const relativeY = ref.current.getBoundingClientRect().top - parent.getBoundingClientRect().top;

            // then get the y-coordinate of this line, relative to the first line of lyrics
            const scrollY = relativeY + parent.scrollTop;

            // find the height of each line
            const margin = parseFloat(window.getComputedStyle(ref.current)['marginBottom']);
            const elemHeight = margin + ref.current.offsetHeight;

            // the actual position to scroll to within the parent container
            const extraSpace = 2 * elemHeight + margin / 2;
            const y = scrollY - (extraSpace);

            parent.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [current, ref]);

    return (
        <div className={className} ref={ref}>{children}</div>
    );
};

export default LyricsLine;
