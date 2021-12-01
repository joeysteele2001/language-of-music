import React from 'react';
import './LyricsScroll.css';
import LyricsLine from './LyricsLine';

import { Milliseconds } from '../../util/duration';
import { LyricsText } from '../../util/lyrics';
import { LineView } from './Lyrics';

export interface Props {
    lyrics: LyricsText;

    /** The timestamps associated with each line of lyrics.
     * 
     * Specify times in milliseconds from the start.
     */
    times?: Milliseconds[];

    /** The current time in the song, as milliseconds from the start. */
    currentTime?: Milliseconds;
}

/** A scrolling lyrics view. */
export const LyricsScroll = (props: Props) => {
    const { lyrics, times, currentTime } = props;

    const activeLine = () => {
        // find the first line of lyrics that starts *after* the current time
        if (times && currentTime) {
            const idx = times.findIndex(t => t > currentTime);

            if (idx === -1) {
                // no lines start after this one, so we're on the last line
                return times.length - 1;
            }

            if (idx === 0) {
                // the first line's start time is after 0ms, so we'll say we're on the first line
                return 0;
            }

            // otherwise, return the previous line
            return idx - 1;

        } else {
            // stick on the first line of lyrics by default
            return 0;
        }
    };

    /** Get the inner list of `LyricsLine` elements for rendering. */
    const lineElements = () => {
        const active = activeLine();

        return lyrics.map((line, idx) => {
            return (
                <LyricsLine key={idx} current={idx === active}>
                    <LineView line={line} />
                </LyricsLine>
            );
        });
    };

    return (
        <div className="Lyrics">
            {lineElements()}
        </div>
    );

};

export default LyricsScroll;