import React from 'react';
import { Link } from 'react-router-dom';

import { Song } from '../../util/song';

import './SongBrowser.css';
export interface Props {
    songs?: Song[];
}

const DEFAULT_SONGS: Song[] = [
    {
        title: 'Gurenge',
        artist: 'LiSA',
        videoId: '_IkopJwRDKU',
    },
    {
        title: 'Gurenge',
        artist: 'LiSA',
        videoId: '_IkopJwRDKU',
    },
    {
        title: 'You Are Immune',
        artist: 'Kurzgesagt',
        videoId: 'LmpuerlbJu0',
    },
    {
        title: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        videoId: 'dQw4w9WgXcQ',
    },
    {
        title: 'Gurenge',
        artist: 'LiSA',
        videoId: '_IkopJwRDKU',
    },
    {
        title: 'Gurenge',
        artist: 'LiSA',
        videoId: '_IkopJwRDKU',
    },
]

export const SongBrowser = (props: Props) => {
    const songs = props.songs || DEFAULT_SONGS;

    return (
        <div className="SongBrowser">
            {
                songs.map(song => (
                    <div className="SongBrowser-song">
                        <Link to={`/new-songpage?song=${song.videoId}`}>
                            <div
                                className="SongBrowser-thumbnail"
                                style={{
                                    backgroundImage: `url(https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg)`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                            />
                            <div className="SongBrowser-name">{song.title}{song.artist && ` - ${song.artist}`}</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default SongBrowser;
