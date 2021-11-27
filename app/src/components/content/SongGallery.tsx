import React from 'react';
import { Link } from 'react-router-dom';
import { Language, languageNames } from '../../util/language';

import Loading from '../pieces/Loading';

import DataLoading from '../../util/loading';

import styles from './SongGallery.module.css';
import { Song } from '../../util/song';

export interface Props {
    /** The song library to display. 
     * 
     * Shows a loading icon if undefined.
    */
    songs: DataLoading<Song[]>;

    lang?: Language | 'all';
}

export const SongGallery = (props: Props) => {
    const { songs } = props;

    if (!songs) {
        return <Loading>Loading song library...</Loading>;
    }

    const lang = props.lang || 'all';

    return (
        <div className={styles.SongGallery}>
            {
                // todo use song video ids when each song here is unique
                songs
                    .filter(song => lang === 'all' || song.language === lang)
                    .map((song, idx) => {
                        const langName = languageNames[song.language];

                        return (
                            <div className={styles.song} key={idx}>
                                {
                                    lang === 'all' &&
                                    <div className={styles.lang}>{langName}</div>
                                }

                                <Link to={`/songpage?song=${song.videoId}`}>
                                    <img
                                        src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`}
                                        alt={song.title}
                                        className={styles.thumbnail}
                                    />
                                    <div className={styles.name}>{song.title}{song.artist && ` - ${song.artist}`}</div>
                                </Link>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default SongGallery;
