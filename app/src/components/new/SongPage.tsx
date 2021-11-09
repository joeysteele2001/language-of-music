import React from 'react';
import { useLocation } from 'react-router-dom';

import YouTubePlayer from '../YouTubePlayer';
import Lyrics from '../Lyrics';

import { Milliseconds } from '../../util/duration';
import { Settings, DEFAULT_PRESET } from '../../util/settings';

import './SongPage.css';

import exampleLyrics from '../../resources/exampleLyrics.json';

export interface Props {
    settings?: Settings;
}

const DEFAULT_SONG = '_IkopJwRDKU';

// Custom hook function to get the `?song=<id>` part of the URL
// Modified from an example on `reactrouter.com`
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const SongPage = (props: Props) => {
    const query = useQuery();

    const settings = props.settings || DEFAULT_PRESET;

    const [time, setTime] = React.useState<Milliseconds>(0);

    const songId = query.get('song') || DEFAULT_SONG;

    let lyrics;
    if (settings.parameters.chords) {
        lyrics = exampleLyricsChords;
    } else {
        lyrics = lyricsElements(exampleLyrics.lyrics);
    }

    return (
        <>
            <h1>Song Name</h1>

            <YouTubePlayer
                id="music-video"
                title="Music Video Player"
                videoId={songId}
                onTimeUpdate={setTime}
            />

            <div className="lyrics">
                { /* TODO: wrap long lines of lyrics so they don't go off the screen */}
                <Lyrics currentTime={time}>
                    {lyrics}
                </Lyrics>

                {settings.parameters.sideTranslation &&
                    <Lyrics currentTime={time}>
                        {lyrics}
                    </Lyrics>
                }
            </div>
        </>
    );
};

export default SongPage;

const exampleLyricsChords = `suyoku nareru riyuu wo shitta
C       D      Em D Em D
boku wo tsurete susume

Em D Em D
Em D Em D
Em D Em D

Em            D            C   D
doro darake no soumatou ni you  kowabaru kokoro
Em           D                   C
furueru te wa tsukamitai mono ga aru
D     Dsus4
soredakesa
Em            D
yoru no nioi ni (I'll spend all thirty nights)
C            D
sora nirande mo (Staring into the sky)
Em             D             C
kawatteikeruno wa jibun jishin dake
D     Dsus4
soredakesa
C       D        Em         Bm
tsuyoku nareru riyuu wo shitta
C       D      Em
boku wo tsurete susume

N.C.
doushitatte!
C                 D
kesenai yume mo tomarenai ima mo
Em                   Bm          C
dareka no tame ni tsuyoku nareru nara
     D#dim    Em D Em D
nando demo tachiagare
Bm A Bm  A  C                  D
sekai ni uchinomesarete makeru imi wo shitta
D#dim         Em       C
guren no hana yo sakihokore!
    D
un'mei wo terashite

Em D Em D Em`
    .split('\n');

export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];
export type AnnotatedText = { text: string, ruby?: string };


const annotatedTextToElements = (annotatedText: AnnotatedText) => {
    const { text, ruby } = annotatedText;
    if (ruby) {
        return <ruby>{text}<rp> (</rp><rt>{ruby}</rt><rp>)</rp></ruby>;
    } else {
        return <>{text}</>;
    }
}

const lineToElements = (line: AnnotatedText[]) => {
    // give each line's elements `key`s so React is happy
    return line
        .map(annotatedTextToElements)
        .map((elem, idx) => React.cloneElement(elem, { key: idx }));
}

const lyricsElements = (lyrics: LyricsText) => (
    lyrics.map((line, idx) => <div key={idx}>{lineToElements(line)}</div>)
);
