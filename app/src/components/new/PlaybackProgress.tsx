import React from 'react';

export type Duration = { minutes: number, seconds: number, remainder?: number };
export type Milliseconds = number;

export interface Props {
    /** The duration of the song. */
    duration: Milliseconds | Duration;

    /** The current time of the song. */
    currentTime: Milliseconds | Duration;
}

export const PlaybackProgress = (props: Props) => {
    const duration = durToStr(durFromRaw(props.duration));
    const currentTime = durToStr(durFromRaw(props.currentTime));

    return <div>{currentTime} / {duration}</div>;
};

const durFromRaw = (dur: Duration | Milliseconds): Duration => {
    if (typeof dur === "object") {
        return dur;
    }

    return milToDur(dur);
}

const durToStr = (dur: Duration): string => {
    const secsStr = String(dur.seconds).padStart(2, '0');
    return `${dur.minutes}:${secsStr}`;
};

const durToMil = (dur: Duration): Milliseconds => {
    return 1000 * ((dur.minutes * 60) + dur.seconds);
};

const milToDur = (mil: Milliseconds): Duration => {
    const minutes = Math.floor(mil / 60_000);
    const seconds = Math.floor((mil / 1000) % 60);
    const remainder = (seconds % 1) * 1000;

    return { minutes, seconds, remainder };
};

export default PlaybackProgress;
