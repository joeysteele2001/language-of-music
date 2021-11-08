import React from 'react';
// import PlaybackControls from './new/playback/PlaybackControls';
import './YouTubePlayer.css';

// TODO: add YouTube API
// TODO: disable YouTube embed controls
// TODO: add our own play / pause button
// TODO: add our own time scrubber

declare global {
    interface Window {
        onYouTubeIframeAPIReady?: () => void;
    }
}

export interface Props {
    /** the player `<iframe>` id */
    id: string;

    /** the player `<iframe>` title */
    title: string;

    /** the id of the YouTube video (e.g. `dQw4w9WgXcQ`) */
    videoId: string;
}

interface State {
    player?: any;
}


class YouTubePlayer extends React.Component<Props, State> {
    componentDidMount = () => {
        // load the YouTube iframe API if it hasn't been loaded already
        if (!window.YT) {
            // this segment of code is adapted from the official YouTube API documentation
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // load the video once the API is ready
            window.onYouTubeIframeAPIReady = this.loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        } else {
            // otherwise, just load the video
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const playerId = this.props.id;
        const videoId = this.props.videoId;

        // if the YouTube API isn't loaded, we can't load a video
        if (window.YT) {
            const newPlayer = new YT.Player(playerId, {
                videoId,
                playerVars: {
                    autoplay: 0,
                    color: 'white',
                    controls: 1,
                    fs: 0,
                    modestbranding: 1, // 
                    origin: 'http://localhost:3000',
                    playsinline: 1,
                },
                events: {
                    onReady: (evt: any) => evt.target.playVideo(),
                    onStateChange: (evt) => { console.log(evt.data) },
                }
            });

            this.setState({ player: newPlayer });
        }
    };

    render = () => {
        const playerId = this.props.id;

        return (
            <div>
                <div id={playerId} />
            </div>
        );
    };
}

export default YouTubePlayer;
