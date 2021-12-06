import React from 'react';
import { Link } from 'react-router-dom';
import { Language, languageNames } from '../../util/language';

import Loading from '../pieces/Loading';

import DataLoading from '../../util/loading';

import styles from './SongGallery.module.css';
import { GeniusId, SongMetadata } from '../../util/song';
import HqIndicator from '../pieces/HqIndicator';

export interface Props {
    /** The song library to display. 
     * 
     * Shows a loading icon if undefined.
    */
    songs: DataLoading<SongMetadata[]>;

    lang?: Language | 'all';
    onlyHq?: boolean;

    /** If a search is in progress, show a loading symbol for a song with this query. */
    searching?: string;
}

export const SongGallery = (props: Props) => {
    const { songs, onlyHq, searching } = props;

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
                    .map(song => {
                        return (
                            <Song
                                key={song.genius.id}
                                hq={song.hq && !onlyHq}
                                lang={lang === 'all' ? song.language : undefined}
                                geniusId={song.genius.id}
                                thumbnail={
                                    <img
                                        src={song.thumbnailUrl}
                                        alt={song.title}
                                        className={styles.thumbnail}
                                    />
                                }
                                songText={`${song.title}${song.artist && ` - ${song.artist}`}`}
                            />
                        );
                    })
            }

            {
                searching && <Song loading={searching} />
            }
        </div>
    );
};

interface SongProps {
    hq?: boolean;
    lang?: Language;
    geniusId?: GeniusId,
    thumbnail?: React.ReactNode;
    songText?: string;
    loading?: string;
}

const Song = (props: SongProps) => {
    const { hq, lang, geniusId, thumbnail, songText, loading } = props;

    const dest = geniusId ? `/songpage?song=${geniusId}` : '';

    return <div className={styles.song}>
        {loading ?
            <Loading>Searching for "{loading}"...</Loading> :
            <>
                <Metadata hq={hq} lang={lang} />
                <Link to={dest}>
                    {thumbnail}
                    <div className={styles.name}>{songText}</div>
                </Link>
            </>
        }
    </div>;
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
