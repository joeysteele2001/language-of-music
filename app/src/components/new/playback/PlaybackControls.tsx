import React from 'react';

import Scrubber from './Scrubber';
import PlayPauseButton from './PlayPauseButton';
import PlaybackProgress from './PlaybackProgress';
import { Duration, Milliseconds, duration as dur } from '../../../util/duration';

import './PlaybackControls.css';

export interface Props {
    duration?: number | Duration;
    onClick?: (playing: boolean) => void;
}

const defaultDuration = dur.toMillis({ minutes: 4, seconds: 20 });

const PlaybackControls = (props: Props) => {
    const { onClick } = props;

    let rawDuration = props.duration || defaultDuration;
    if (typeof rawDuration === 'object') {
        rawDuration = dur.toMillis(rawDuration);
    }

    const duration: Milliseconds = rawDuration;

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
