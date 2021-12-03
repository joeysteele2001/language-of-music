import React from 'react';
import { Link } from 'react-router-dom';
import { Language, languageNames } from '../../util/language';

import Loading from '../pieces/Loading';

import DataLoading from '../../util/loading';

import styles from './SongGallery.module.css';
import { Song } from '../../util/song';
import HqIndicator from '../pieces/HqIndicator';

export interface Props {
    /** The song library to display. 
     * 
     * Shows a loading icon if undefined.
    */
    songs: DataLoading<Song[]>;

    lang?: Language | 'all';
    onlyHq?: boolean;
}

export const SongGallery = (props: Props) => {
    const { songs, onlyHq } = props;

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
                        return (
                            <div className={styles.song} key={idx}>
                                <Metadata
                                    hq={song.hq && !onlyHq}
                                    lang={lang === 'all' ? song.language : undefined}
                                />

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

interface MetadataProps {
    lang?: Language;
    hq?: boolean,
}

const Metadata = (props: MetadataProps) => {
    const { lang, hq } = props;

    return (
        <div className={styles.metadata}>
            {hq && <HqIndicator />}
            <LangName lang={lang} />
        </div>
    );
};

interface LangNameProps {
    lang?: Language;
}

const LangName = (props: LangNameProps) => {
    const { lang } = props;

    return (
        <div className={styles.lang}>
            {lang && languageNames[lang]}
        </div>
    );
};

export default SongGallery;
