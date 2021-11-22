import React from 'react';
import { Link } from 'react-router-dom';
import { languageNames } from '../../util/language';

import { SongLibrary } from '../../util/songLibrary';
import Loading from '../pieces/Loading';

import styles from './SongGallery.module.css';

export interface Props {
    /** The song library to display. 
     * 
     * Shows a loading icon if no songs are listed.
    */
    load: () => Promise<SongLibrary>;
}

export const SongGallery = (props: Props) => {
    const { load: loadSongs } = props;

    const [songs, setSongs] = React.useState<SongLibrary | undefined>();

    // call the 
    React.useEffect(() => {
        loadSongs().then(setSongs);
    }, [loadSongs]);

    if (!songs) {
        return <Loading>Loading song library...</Loading>;
    }

    return (
        <div className={styles.SongGallery}>
            {
                // todo use song video ids when each song here is unique
                songs.map((song, idx) => {
                    const lang = languageNames[song.language];

                    return (
                        <div className={styles.song} key={idx}>
                            <Link to={`/songpage?song=${song.videoId}`}>
                                <img
                                    src={`https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`}
                                    alt={song.title}
                                    className={styles.thumbnail}
                                />
                                <div className={styles.name}>{song.title}{song.artist && ` - ${song.artist}`}</div>
                                <div className={styles.lang}>{lang}</div>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default SongGallery;
