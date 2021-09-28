import React from 'react';
import './Lyrics.css';
import LyricsLine from './LyricsLine';

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
    times?: number[];
}
export interface State {
    activeLine: number;
}

/** A scrolling lyrics view. */
export class Lyrics extends React.PureComponent<Props, State> {
    // Store a handle to the timer in order to clear it when the component unloads.
    timeoutID: ReturnType<typeof setTimeout> | undefined;

    // The line number stored for updating the timer
    // This is necessary because we need to update the timer synchronously, but
    // setting state is asynchronous
    lineForTime: number;

    constructor(props: Props) {
        // initialize component: necessary for all class components
        super(props);

        // initialize the component's state
        this.state = { activeLine: 0 };

        this.lineForTime = 0;
    }

    /** Increment the active line of lyrics. */
    private incActiveLine = () => {
        // set numChildren to 0 if no children were given
        const numChildren = this.props.children?.length || 0;

        // do nothing if we're at the last line of lyrics
        if (this.state.activeLine >= numChildren) {
            return;
        }

        // increment the immediate timer line counter
        // also, set the next timer
        if (this.props.times) {
            const times = this.props.times;
            const line = this.lineForTime;
            const timeDiff = times[line + 1] - times[line];
            this.timeoutID = setTimeout(this.incActiveLine, timeDiff);
            this.lineForTime++;
        }

        // update the state
        // we have to call `setState` rather than setting it directly
        // we take in the old `activeLine` and return the new one
        // see https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
        this.setState(({ activeLine }) => {
            return { activeLine: activeLine + 1 };
        });
    }

    // automatically increment the lyrics line if line times were given
    // set the timer when the component first loads
    componentDidMount() {
        if (this.props.times) {
            const diff = this.props.times[1] - this.props.times[0];
            this.timeoutID = setTimeout(this.incActiveLine, diff);
        }
    }

    // clear the lyrics line timer when the component unloads
    componentWillUnmount() {
        if (this.timeoutID) {
            clearInterval(this.timeoutID);
        }
    }

    /** Get the inner list of `LyricsLine` elements for rendering. */
    private lineElements = () => {
        // don't render anything if there are no children
        if (!this.props.children) {
            return false;
        }

        return this.props.children.map((line, idx) => {
            let content: React.ReactNode = line;
            if (line === "") {
                content = <br />;
            }

            return (
                <LyricsLine key={idx} current={idx === this.state.activeLine}>
                    {content}
                </LyricsLine>
            );
        });
    };

    render() {
        return (
            <div className="Lyrics">
                {this.lineElements()}
            </div>
        );
    }
}

export default Lyrics;
