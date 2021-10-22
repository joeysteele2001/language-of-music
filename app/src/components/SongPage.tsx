import React from 'react';
import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import YouTubePlayer from './YouTubePlayer';
import Lyrics from './Lyrics';
import QuizPage from './QuizPage';
import Popup from './Popup';

import exampleLyrics from '../resources/exampleLyrics.json';

export type SongMode = "JustListen" | "ListenLearn" | "PlayAlong";

export interface Props {
    mode: SongMode;
}

const DEFAULT_SONG = '_IkopJwRDKU';

// Custom hook function to get the `?song=<id>` part of the URL
// Modified from an example on `reactrouter.com`
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export const SongPage = (props: Props) => {
    const { mode } = props;

    const { path, url } = useRouteMatch();
    const query = useQuery();

    const songId = query.get("song") || DEFAULT_SONG;

    let lyrics;
    if (mode === 'PlayAlong') {
        lyrics = exampleLyricsChords;
    } else {
        lyrics = lyricsElements(exampleLyrics);
    }

    return (
        <div className={`SongPage ${mode}`}>
            <h1>Song Title</h1>

            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId={songId}
            />

            <Lyrics times={exampleTimes}>
                {lyrics}
            </Lyrics>

            <Popup>
                <b>Your Lyrics</b>
                <p>Translation</p>
            </Popup>

            {
                mode === 'ListenLearn' &&
                <>
                    <Link to={`${url}/Quiz`}>Take the Quiz</Link>
                    <Switch>
                        <Route path={`${path}/Quiz`}>
                            <QuizPage />
                        </Route>
                    </Switch>
                </>
            }
        </div>
    )
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

const exampleTimes = Array.from(Array(exampleLyrics.length).keys())
    .map(i => (i ** 1.7) * 10);
