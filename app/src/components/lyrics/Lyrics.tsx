import React from 'react';
import { LyricsLine, LyricsText } from '../../util/lyrics';
import TextView from '../pieces/TextView';

export interface Props {
    text: LyricsText;
}

export const Lyrics = (props: Props) => {
    const { text } = props;

    return <>{text.map((line, idx) => <LineView line={line} key={idx} />)}</>;
};

export interface LineProps {
    line: LyricsLine;
}

export const LineView = (props: LineProps) => {
    const { line } = props;

    return (<>
        {line.map((annotatedText, idx) =>
            <TextView text={annotatedText} key={idx} />)}
    </>);
};

export default Lyrics;