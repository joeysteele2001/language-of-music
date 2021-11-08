import React from 'react';
import { Milliseconds } from '../util/duration';
import './YouTubePlayer.css';

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

    /** the width of the video player, in pixels */
    width?: number | string;

    /** the height of the video player, in pixels */
    height?: number | string;

    /** callback to run on every time update */
    onTimeUpdate?: (newTime: Milliseconds) => void;
}

interface State {
    player?: YT.Player;
}

class YouTubePlayer extends React.Component<Props, State> {
    timeUpdatePollID?: ReturnType<typeof setInterval>;

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

    componentWillUnmount = () => {
        if (this.timeUpdatePollID) {
            clearInterval(this.timeUpdatePollID);
        }
    };

    loadVideo = () => {
        const { id: playerId, videoId, width, height } = this.props;

        // if the YouTube API isn't loaded, we can't load a video
        if (window.YT) {
            const newPlayer = new YT.Player(playerId, {
                videoId,
                width,
                height,

                playerVars: {
                    autoplay: 0,
                    color: 'white',
                    controls: 1,
                    fs: 0,
                    // setting `color` to `white` disables the ability to enable `modestbranding`
                    // but we'll try anyway just in case YouTube ever decides to be nice
                    modestbranding: 1,
                    origin: 'http://localhost:3000',
                    playsinline: 1,
                },
                events: {
                    onReady: this.onReady,
                }
            });

            this.setState({ player: newPlayer });
        }
    };

    private onReady = (evt: YT.PlayerEvent) => {
        evt.target.playVideo();

        if (!this.props.onTimeUpdate) {
            // we're done; just play the video
            return;
        }

        // poll for the video time every ~100ms to update the parent component
        // this doesn't need to be super precisely-timed, so `setInterval` is fine
        this.timeUpdatePollID = setInterval(() => {
            const { player } = this.state;
            const { onTimeUpdate } = this.props;

            if (player && onTimeUpdate) {
                onTimeUpdate(player.getCurrentTime() * 1000);
            }
        }, 100);
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
