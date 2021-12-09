import React from 'react';
import { LyricsLine, LyricsText } from '../../util/lyrics';
import TextView from '../pieces/TextView';

export interface Props {
    text: LyricsText;
    chords?: boolean;
}

export const Lyrics = (props: Props) => {
    const { text, chords } = props;

    return <>{text.map((line, idx) => <LineView line={line} key={idx} chords={chords} />)}</>;
};

export interface LineProps {
    line: LyricsLine;
    chords?: boolean;
}

export const LineView = (props: LineProps) => {
    const { line, chords } = props;

    return (<>
        {line.map((annotatedText, idx) =>
            <TextView text={annotatedText} key={idx} chords={chords} />)}
    </>);
};

export default Lyrics;