import React from 'react';
import { useLocation } from 'react-router-dom';

import YouTubePlayer from '../playback/YouTubePlayer';
import LyricsScroll from '../lyrics/LyricsScroll';

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

    const lyricsElems = () => {
        if (lyrics) {
            /* TODO: wrap long lines of lyrics so they don't go off the screen */
            return (<>
                <LyricsScroll lyrics={lyrics.lyrics} currentTime={time} times={lyrics.times} />

                {settings.parameters.sideTranslation &&
                    <LyricsScroll lyrics={lyrics.lyrics} currentTime={time} times={lyrics.times} />
                }
            </>);
        } else {
            return "loading lyrics...";
        }
    };

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

                <div className="lyrics">
                    {lyricsElems()}
                </div>
            </>
        );
    } else {
        return <h1>Loading Song...</h1>;
    }

};

export default SongPage;
