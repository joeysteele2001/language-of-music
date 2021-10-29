import React from 'react';

import './PlaybackControls.css';

export interface Props {
    onClick?: (playing: boolean) => void;
}

const PlaybackControls = ({ onClick }: Props) => {
    const [playing, setPlaying] = React.useState(false);

    const toggle = () => {
        if (onClick) {
            onClick(!playing);
        }

        setPlaying(!playing);
    };

    return (
        <div className="PlaybackControls">
            <button onClick={toggle}>
                {playing ? PAUSE_ICON : PLAY_ICON}
            </button>
            <div>0:00 / 4:20</div>
            <div>Scrubber</div>
        </div>
    );
};

const PLAY_ICON = '\u25b6';
const PAUSE_ICON = '\u23f8';

export default PlaybackControls;
