import React from 'react';

import Sidebar from './Sidebar';
import TopBar from './TopBar';

import YouTubePlayer from '../YouTubePlayer';
import Lyrics from '../Lyrics';
import PlaybackControls from './PlaybackControls';

import './SongPage.css';

export const SongPage = () => {
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
                    />

                    <PlaybackControls />

                    <div className="lyrics">
                        { /* TODO: wrap long lines of lyrics so they don't go off the screen */}
                        <Lyrics>
                            {['short', 'lines', 'of', 'lyrics']}
                        </Lyrics>
                        <Lyrics>
                            {['líneas', 'cortas', 'de', 'letras']}
                        </Lyrics>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SongPage;
