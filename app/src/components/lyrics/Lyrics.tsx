import React from 'react';
import { AnnotatedText, LyricsLine, LyricsText } from '../../util/lyrics';

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
            <TextElems text={annotatedText} key={idx} />)}
    </>);
};

interface ElementsProps {
    text: AnnotatedText;
}

const TextElems = (props: ElementsProps) => {
    const { text: annotatedText } = props;

    const { text, ruby } = annotatedText;

    if (ruby) {
        return <ruby>{text}<rp> (</rp><rt>{ruby}</rt><rp>)</rp></ruby>;
    } else {
        return <>{text}</>;
    }
};

export default Lyrics;