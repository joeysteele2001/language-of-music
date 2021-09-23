import React from 'react';
import './YouTubePlayer.css';

export interface Props {
    /** the player `<iframe>` id */
    id: string;

    /** the player `<iframe>` title */
    title: string;

    /** the id of the YouTube video (e.g. `dQw4w9WgXcQ`) */
    videoId: string;
}

/** An embedded YouTube video player. */
const YouTubePlayer = (props: Props) => {
    return (
        <iframe
            id={props.id}
            title={props.title}
            src={`https://www.youtube.com/embed/${props.videoId}`}
        />
    );
};

export default YouTubePlayer;
