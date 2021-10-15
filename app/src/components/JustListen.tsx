import React from 'react';
import Lyrics from './Lyrics';
import YouTubePlayer from './YouTubePlayer';

import exampleLyrics from '../resources/exampleLyrics.json';

const JustListen = () => {
    return (
        <div className="JustListen">
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId="_IkopJwRDKU"
            />
            <Lyrics times={exampleTimes} >
                {lyricsElements(exampleLyrics)}
            </Lyrics>
        </div >

    )
};

export default JustListen;

export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];
export type AnnotatedText = { text: string, ruby?: string };


const annotatedTextToElements = (annotatedText: AnnotatedText) => {
    const { text, ruby } = annotatedText;
    if (ruby) {
        return <ruby>{text} <rp>(</rp><rt>{ruby}</rt><rp>)</rp></ruby>;
    } else {
        return text;
    }
}

const lineToElements = (line: AnnotatedText[]) => {
    return line.map(annotatedTextToElements);
}

const lyricsElements = (lyrics: LyricsText) => lyrics.map(line => <div>{lineToElements(line)}</div>);

const exampleTimes = Array.from(Array(exampleLyrics.length).keys())
    .map(i => (i ** 1.7) * 10);
