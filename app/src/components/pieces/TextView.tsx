import React from 'react';
import { AnnotatedText } from '../../util/text';

interface Props {
    text: AnnotatedText | string;
}

export const TextView = (props: Props) => {
    let annotatedText;
    if (typeof props.text === 'string') {
        annotatedText = { text: props.text };
    } else {
        annotatedText = props.text;
    }

    const { text, ruby } = annotatedText;

    if (ruby) {
        return <ruby>{text}<rp> (</rp><rt>{ruby}</rt><rp>)</rp></ruby>;
    } else {
        return <>{text}</>;
    }
};

export default TextView;