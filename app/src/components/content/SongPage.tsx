import React from 'react';
import { useLocation } from 'react-router-dom';

import YouTubePlayer from '../playback/YouTubePlayer';
import LyricsScroll from '../lyrics/LyricsScroll';
import LoadingMsg from '../pieces/Loading';

import { Milliseconds } from '../../util/duration';
import { Settings, DEFAULT_PRESET } from '../../util/settings';

import './SongPage.css';

import { Lyrics } from '../../util/lyrics';
import { Resource } from '../../util/resources';
import Quiz from '../quiz/Quiz';
import Icon, { IconName } from '../pieces/Icon';
import { generateQuiz } from '../../util/vocab';
import Failure from '../pieces/Failure';
import { loadSongData, SongData } from '../../util/songData';
import Loading from '../../util/loading';
import { SongMetadata } from '../../util/song';

type Mode = "lyrics" | "quiz";

const modeReducer = (mode: Mode) => mode === "lyrics" ? "quiz" : "lyrics";

export interface Props {
    settings?: Settings;
    reportSong?: (song: SongMetadata) => void;
}

// Custom hook function to get the `?song=<id>` part of the URL
// Modified from an example on `reactrouter.com`
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const SongPage = (props: Props) => {
    const { reportSong } = props;

    const query = useQuery();

    const settings = props.settings || DEFAULT_PRESET;

    const [time, setTime] = React.useState<Milliseconds>(0);
    const [data, setData] = React.useState<Loading<SongData>>(undefined);
    const [mode, toggleMode] = React.useReducer(modeReducer, "lyrics");

    const songQuery = query.get('song') || undefined;
    const songId = parseIdOrDefault(songQuery);

    // load the song and lyrics when songId changes
    React.useEffect(() => {
        if (songId) {
            loadSongData(songId).then(setData);
        }
    }, [songId]);

    React.useEffect(() => {
        if (reportSong && data) {
            reportSong(data.metadata);
        }
        // sketchy hack to avoid infinite update recursion mess: assume `reportSong` doesn't change
        // eslint-disable-next-line
    }, [data]);

    // TODO: make chords work

    if (!songId) {
        return <Failure>Invalid Song ID: '{songQuery}'</Failure>;
    }

    if (data) {
        const song = data.metadata;

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
                    resource={data.resource}
                    time={time}
                    settings={settings}
                />
            </>
        );
    } else {
        return <LoadingMsg>Loading song...</LoadingMsg>;
    }

};

const parseIdOrDefault = (id: string | undefined): number | undefined => {
    const DEFAULT_ID = 4489125;

    if (!id) {
        return DEFAULT_ID;
    }

    return parseId(id);
};

const parseId = (id: string): number | undefined => {
    const result = parseInt(id);
    if (isNaN(result)) {
        return undefined;
    } else {
        return result;
    }
}

interface BottomPageProps {
    mode: "lyrics" | "quiz";
    resource: Resource | undefined;
    time: Milliseconds;
    settings: Settings;
}

const BottomPage = (props: BottomPageProps) => {
    const { mode, resource, time, settings } = props;

    if (!resource) {
        return <LoadingMsg>Loading lyrics and vocabulary...</LoadingMsg>;
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
        return <LoadingMsg>Loading lyrics...</LoadingMsg>;
    }

    let sideBox = undefined;
    if (sideTranslation) {
        if (lyrics.translation) {
            sideBox = <LyricsScroll
                lyrics={lyrics.translation}
                currentTime={time}
                times={lyrics.times}
            />;
        } else {
            sideBox = <div className="Lyrics">No translation available. <Icon name={IconName.Frown} /></div>;
        }
    }

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
