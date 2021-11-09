import React from 'react';

import YouTubePlayer from '../YouTubePlayer';
import Lyrics from '../Lyrics';

import { Milliseconds } from '../../util/duration';
import { Settings, DEFAULT_PRESET } from '../../util/settings';

import './SongPage.css';


export interface Props {
    settings?: Settings;
}

export const SongPage = (props: Props) => {
    const settings = props.settings || DEFAULT_PRESET;

    const [time, setTime] = React.useState<Milliseconds>(0);

    return (
        <>
            <h1>Song Name</h1>

            <YouTubePlayer
                id="music-video"
                title="Gurenge"
                videoId="_IkopJwRDKU"
                onTimeUpdate={setTime}
            />

            <div className="lyrics">
                { /* TODO: wrap long lines of lyrics so they don't go off the screen */}
                <Lyrics currentTime={time}>
                    {['short', 'lines', 'of', 'lyrics']}
                </Lyrics>

                {settings.parameters.sideTranslation &&
                    <Lyrics currentTime={time}>
                        {['líneas', 'cortas', 'de', 'letras']}
                    </Lyrics>
                }
            </div>
        </>
    );
};

export default SongPage;
