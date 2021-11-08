import React from 'react';

import Sidebar from './Sidebar';
import TopBar from './TopBar';

import YouTubePlayer from '../YouTubePlayer';
import Lyrics from '../Lyrics';

import { SettingsValues, presetDefaults } from './Settings';

import './SongPage.css';
import { Milliseconds } from '../../util/duration';

export interface Props {
    settings?: SettingsValues;
}

export const SongPage = (props: Props) => {
    const settings = props.settings || presetDefaults[0].preset;

    const [time, setTime] = React.useState<Milliseconds>(0);

    return (
        <div className="NewHome">
            <Sidebar />

            <div className="main-side">
                <TopBar />
                <main>
                    <h1>Song Name</h1>

                    <YouTubePlayer
                        id="music-video"
                        title="Gurenge"
                        videoId="_IkopJwRDKU"
                        onTimeUpdate={setTime}
                    />

                    <div className="lyrics">
                        { /* TODO: wrap long lines of lyrics so they don't go off the screen */}
                        <Lyrics>
                            {['short', 'lines', 'of', 'lyrics']}
                        </Lyrics>

                        {settings.sideTranslation && <Lyrics>
                            {['líneas', 'cortas', 'de', 'letras']}
                        </Lyrics>}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SongPage;
