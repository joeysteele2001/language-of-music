import React from 'react';

import Scrubber from './Scrubber';
import PlayPauseButton from './PlayPauseButton';
import PlaybackProgress from './PlaybackProgress';
import { Duration, Milliseconds, duration as dur } from '../../../util/duration';

import './PlaybackControls.css';

export interface Props {
    playing?: boolean,
    time?: number | Duration;
    duration?: number | Duration;
    onClick?: () => void;
    onTimeScrub?: (newTime: number) => void;
}

const defaultDuration = dur.toMillis({ minutes: 4, seconds: 20 });

const PlaybackControls = (props: Props) => {
    const { playing, onClick, onTimeScrub } = props;

    let rawDuration = props.duration || defaultDuration;
    if (typeof rawDuration === 'object') {
        rawDuration = dur.toMillis(rawDuration);
    }
    const duration: Milliseconds = rawDuration;

    let rawTime = props.time || 0;
    if (typeof rawTime === 'object') {
        rawTime = dur.toMillis(rawTime);
    }
    const time: Milliseconds = rawTime;

    // normalized playback time, from 0.0 to 1.0
    const normalizedTime = time / duration;

    return (
        <div className="PlaybackControls">
            <PlayPauseButton onClick={onClick} playing={playing} />
            <PlaybackProgress currentTime={time * duration} duration={duration} />
            <Scrubber value={normalizedTime} onChange={onTimeScrub} />
        </div>
    );
};

export default PlaybackControls;
