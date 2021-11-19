import React from 'react';
import { Link } from 'react-router-dom';

import { Song } from '../../util/song';

import './SongGallery.css';
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
        title: 'Gurenge',
        artist: 'LiSA',
        videoId: '_IkopJwRDKU',
    },
]

export const SongGallery = (props: Props) => {
    const songs = props.songs || DEFAULT_SONGS;

    return (
        <div className="SongGallery">
            {
                // todo use song video ids when each song here is unique
                songs.map((song, idx) => (
                    <div className="SongGallery-song" key={idx}>
                        <Link to={`/songpage?song=${song.videoId}`}>
                            <img
                                src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`}
                                alt={song.title}
                                className="SongGallery-thumbnail"
                            />
                            <div className="SongGallery-name">{song.title}{song.artist && ` - ${song.artist}`}</div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default SongGallery;