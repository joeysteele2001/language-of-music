import React from 'react';
import { useLocation } from 'react-router-dom';

import YouTubePlayer from '../playback/YouTubePlayer';
import LyricsScroll from '../lyrics/LyricsScroll';
import Loading from '../pieces/Loading';

import { Milliseconds } from '../../util/duration';
import { Settings, DEFAULT_PRESET } from '../../util/settings';

import './SongPage.css';

import { getSongOrDefault, Song } from '../../util/song';
import { getLyricsOrDefault, Lyrics } from '../../util/lyrics';

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
    const [lyrics, setLyrics] = React.useState<Lyrics | undefined>(undefined);

    const songId = query.get('song') || undefined;

    // load the song and lyrics when songId changes
    React.useEffect(() => {
        getSongOrDefault(songId).then(setSong);
        getLyricsOrDefault(songId).then(setLyrics);
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

                {settings.parameters.quizzes &&
                    <button>Take the Quiz</button>}

                <div className="lyrics">
                    <LyricsBoxes
                        lyrics={lyrics}
                        sideTranslation={settings.parameters.sideTranslation}
                        time={time}
                    />
                </div>
            </>
        );
    } else {
        return <Loading>Loading song...</Loading>;
    }

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
        <>
            <LyricsScroll
                lyrics={lyrics.lyrics}
                currentTime={time}
                times={lyrics.times}
            />

            {sideBox}
        </>
    );
};

export default SongPage;
