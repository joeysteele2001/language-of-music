import React from 'react';
import { Milliseconds, Duration, duration as dur } from '../../util/duration';

export interface Props {
    /** The duration of the song. */
    duration: Milliseconds | Duration;

    /** The current time of the song. */
    currentTime: Milliseconds | Duration;
}

export const PlaybackProgress = (props: Props) => {
    const duration = durToStr(dur.fromRaw(props.duration));
    const currentTime = durToStr(dur.fromRaw(props.currentTime));

    return <div>{currentTime} / {duration}</div>;
};

const durToStr = (dur: Duration): string => {
    const secsStr = String(dur.seconds).padStart(2, '0');
    return `${dur.minutes}:${secsStr}`;
};

export default PlaybackProgress;
