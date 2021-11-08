import React from 'react';
import './Lyrics.css';
import LyricsLine from './LyricsLine';

import { Milliseconds } from '../util/duration';

export interface Props {
    /** The actual lyrics.
     * 
     * Can be a list of strings or components.
     */
    children?: React.ReactNode[];

    /** The timestamps associated with each line of lyrics.
     * 
     * Specify times in milliseconds from the start.
     */
    times?: Milliseconds[];

    /** The current time in the song, as milliseconds from the start. */
    currentTime?: Milliseconds;
}

/** A scrolling lyrics view. */
export class Lyrics extends React.PureComponent<Props> {
    /** Get the inner list of `LyricsLine` elements for rendering. */
    private lineElements = () => {
        // don't render anything if there are no children
        if (!this.props.children) {
            return false;
        }

        const activeLine = this.activeLine();

        return this.props.children.map((line, idx) => {
            let content: React.ReactNode = line;
            if (line === "") {
                content = <br />;
            }

            return (
                <LyricsLine key={idx} current={idx === activeLine}>
                    {content}
                </LyricsLine>
            );
        });
    };

    private activeLine = () => {
        // find the first line of lyrics that starts *after* the current time
        const { times, currentTime } = this.props;

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

    render() {
        return (
            <div className="Lyrics">
                {this.lineElements()}
            </div>
        );
    };
};

export default Lyrics;