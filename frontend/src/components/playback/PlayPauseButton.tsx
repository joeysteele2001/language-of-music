import React from 'react';

export interface Props {
    playing?: boolean;
    onClick?: () => void;
}

export const PlayPauseButton = (props: Props) => {
    const { playing, onClick } = props;

    return (
        <button onClick={() => onClick && onClick()}>
            {playing ? PAUSE_ICON : PLAY_ICON}
        </button>
    );
};

const PLAY_ICON = '\u25b6';
const PAUSE_ICON = '\u23f8';

export default PlayPauseButton;
