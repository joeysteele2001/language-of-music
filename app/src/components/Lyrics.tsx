import React from 'react';
import './Lyrics.css';
import LyricsLine from './LyricsLine';

export interface Props {
    /** The actual lyrics.
     * 
     * Can be a list of strings or components.
     */
    children?: React.ReactNode[];
}
export interface State {
    activeLine: number;
}

/** A scrolling lyrics view. */
export class Lyrics extends React.PureComponent<Props, State> {
    // Store a handle to the timer in order to clear it when the component unloads.
    intervalID: ReturnType<typeof setTimeout> | undefined;

    constructor(props: Props) {
        // initialize component: necessary for all class components
        super(props);

        // initialize the component's state
        this.state = { activeLine: 0 };
    }

    /** Increment the active line of lyrics. */
    private incActiveLine = () => {
        // set numChildren to 0 if no children were given
        const numChildren = this.props.children?.length || 0;

        // do nothing if we're at the last line of lyrics
        if (this.state.activeLine >= numChildren) {
            return;
        }

        // update the state
        // we have to call `setState` rather than setting it directly
        // we take in the old `activeLine` and return the new one
        // see https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
        this.setState(({ activeLine }) => {
            return { activeLine: activeLine + 1 };
        });
    }

    // TEMPORARY: automatically increment the lyrics line every 2 seconds
    // set the timer when the component first loads
    componentDidMount() {
        this.intervalID = setInterval(this.incActiveLine, 2000);
    }

    // TEMPORARY: clear the lyrics line timer when the component unloads
    componentWillUnmount() {
        if (this.intervalID) {
            clearInterval(this.intervalID);
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
