import React from 'react';
import { useLocation } from 'react-router-dom';

import YouTubePlayer from '../playback/YouTubePlayer';
import LyricsScroll from '../lyrics/LyricsScroll';
import Loading from '../pieces/Loading';

import { Milliseconds } from '../../util/duration';
import { Settings, DEFAULT_PRESET } from '../../util/settings';

import './SongPage.css';

import { getSongOrDefault, Song } from '../../util/song';
import { Lyrics } from '../../util/lyrics';
import { getResourceOrDefault, Resource } from '../../util/resources';
import Quiz from '../quiz/Quiz';
import Icon, { IconName } from '../pieces/Icon';
import { generateQuiz } from '../../util/vocab';

type Mode = "lyrics" | "quiz";

const modeReducer = (mode: Mode) => mode === "lyrics" ? "quiz" : "lyrics";

export interface Props {
    settings?: Settings;
}

// Custom hook function to get the `?song=<id>` part of the URL
// Modified from an example on `reactrouter.com`
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const SongPage = (props: Props) => {
    const query = useQuery();

    const settings = props.settings || DEFAULT_PRESET;

    const [time, setTime] = React.useState<Milliseconds>(0);
    const [song, setSong] = React.useState<Song | undefined>(undefined);
    const [resource, setResource] = React.useState<Resource | undefined>(undefined);
    const [mode, toggleMode] = React.useReducer(modeReducer, "lyrics");

    const songId = query.get('song') || undefined;

    // load the song and lyrics when songId changes
    React.useEffect(() => {
        getSongOrDefault(songId).then(setSong);
        getResourceOrDefault(songId).then(setResource);
    }, [songId]);

    // TODO: make chords work

    if (song) {
        return (
            <>
                <h1>{song.title}</h1>
                {song.artist && <h2>{song.artist}</h2>}

                <YouTubePlayer
                    id="music-video"
                    title="Music Video Player"
                    videoId={song.videoId}
                    onTimeUpdate={setTime}
                />

                {
                    settings.parameters.quizzes.enabled &&
                    <button onClick={() => toggleMode()}>
                        {mode === "lyrics" ? "Take the quiz" : "Read the lyrics"}
                    </button>
                }

                <BottomPage
                    mode={mode}
                    resource={resource}
                    time={time}
                    settings={settings}
                />
            </>
        );
    } else {
        return <Loading>Loading song...</Loading>;
    }

};

interface BottomPageProps {
    mode: "lyrics" | "quiz";
    resource: Resource | undefined;
    time: Milliseconds;
    settings: Settings;
}

const BottomPage = (props: BottomPageProps) => {
    const { mode, resource, time, settings } = props;

    if (!resource) {
        return <Loading>Loading lyrics and vocabulary...</Loading>;
    }

    const quizSettings = settings.parameters.quizzes;

    if (mode === "lyrics" || !quizSettings.enabled) {
        return (
            <LyricsBoxes
                lyrics={resource?.lyrics}
                time={time}
                sideTranslation={settings.parameters.sideTranslation}
            />
        );
    }

    if (!resource.vocab) {
        return <>No vocabulary for this song. <Icon name={IconName.Frown} /></>;
    }

    const quiz = generateQuiz(resource.vocab, quizSettings.difficulty);

    return (
        <Quiz questions={quiz} />
    );
};

interface LyricsBoxesProps {
    lyrics: Lyrics | undefined;
    time: Milliseconds;
    sideTranslation: boolean;
}

const LyricsBoxes = (props: LyricsBoxesProps) => {
    const { lyrics, time, sideTranslation } = props;

    if (!lyrics) {
        return <Loading>Loading lyrics...</Loading>;
    }

    const sideBox = sideTranslation &&
        <LyricsScroll
            lyrics={lyrics.lyrics}
            currentTime={time}
            times={lyrics.times}
        />;

    return (
        <div className="lyrics">
            <LyricsScroll
                lyrics={lyrics.lyrics}
                currentTime={time}
                times={lyrics.times}
            />

            {sideBox}
        </div>
    );
};

export default SongPage;
