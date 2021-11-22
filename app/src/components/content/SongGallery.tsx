import React from 'react';
import { Link } from 'react-router-dom';

import { SongLibrary } from '../../util/songLibrary';
import Loading from '../pieces/Loading';

import './SongGallery.css';
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
