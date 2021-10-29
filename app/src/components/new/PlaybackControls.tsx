import React from 'react';

import './PlaybackControls.css';

export const PlaybackControls = () => {
    return (
        <div className="PlaybackControls">
            <div>Play/Pause</div>
            <div>0:00 / 4:20</div>
            <div>Scrubber</div>
        </div>
    );
};

export default PlaybackControls;
