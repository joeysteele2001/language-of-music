import React from 'react';
import { AnnotatedText } from '../../util/text';

import styles from './TextView.module.css';

interface Props {
    text: AnnotatedText | string;
    chords?: boolean;
}

export const TextView = (props: Props) => {
    let annotatedText;
    if (typeof props.text === 'string') {
        annotatedText = { text: props.text };
    } else {
        annotatedText = props.text;
    }

    const chord = annotatedText.chord;
    const inner = <InnerText text={annotatedText} />;

    if (chord && props.chords) {
        return <><span className={styles.chord}>{chord}</span>{inner}</>;
    } else {
        return inner;
    }
};

interface InnerTextProps {
    text: AnnotatedText;
}

const InnerText = (props: InnerTextProps) => {
    const { text, ruby } = props.text;

    if (ruby) {
        return <ruby>{text}<rp> (</rp><rt>{ruby}</rt><rp>)</rp></ruby>;
    } else {
        return <>{text}</>;
    }
};

export default TextView;