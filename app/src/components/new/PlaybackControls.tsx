import React from 'react';

import Scrubber from './Scrubber';
import PlayPauseButton from './PlayPauseButton';
import PlaybackProgress from './PlaybackProgress';

import './PlaybackControls.css';

export interface Props {
    onClick?: (playing: boolean) => void;
}

const PlaybackControls = ({ onClick }: Props) => {
    const duration = 4 * 60000 + 20 * 1000;

    const [playing, setPlaying] = React.useState(false);

    // normalized playback time, from 0.0 to 1.0
    const [time, setTime] = React.useState(0);

    const toggle = () => {
        if (onClick) {
            onClick(!playing);
        }

        setPlaying(!playing);
    };

    return (
        <div className="PlaybackControls">
            <PlayPauseButton onClick={toggle} playing={playing} />
            <PlaybackProgress currentTime={time * duration} duration={duration} />
            <Scrubber value={time} onChange={setTime} />
        </div>
    );
};

export default PlaybackControls;
