import React from 'react';
import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import YouTubePlayer from './YouTubePlayer';
import Lyrics from './Lyrics';
import QuizPage from './QuizPage';

export type SongMode = "JustListen" | "ListenLearn" | "PlayAlong";

export interface Props {
    mode: SongMode;
}

const DEFAULT_SONG = 'dQw4w9WgXcQ';

// Custom hook function to get the `?song=<id>` part of the URL
// Modified from an example on `reactrouter.com`
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export const SongPage = (props: Props) => {
    const { mode } = props;

    const { path, url } = useRouteMatch();
    const query = useQuery();

    const songId = query.get("song") || DEFAULT_SONG;

    let lyrics;
    if (mode === 'PlayAlong') {
        lyrics = exampleLyricsChords;
    } else {
        lyrics = exampleLyrics;
    }

    return (
        <div className={`SongPage ${mode}`}>
            <h1>Song Title</h1>
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId={songId}
            />

            <Lyrics times={exampleTimes}>
                {lyrics}
            </Lyrics>

            {
                mode === 'ListenLearn' &&
                <>
                    <Link to={`${url}/Quiz`}>Quiz</Link>
                    <Switch>
                        <Route path={`${path}/Quiz`}>
                            <QuizPage />
                        </Route>
                    </Switch>
                </>
            }
        </div>
    )
};

export default SongPage;

const exampleLyrics = `We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinkin' of
You wouldn't get this from any other guy
I just wanna tell you how I'm feelin'
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've know each other for so long
Your heart's been achin' but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
And if you ask me how I'm feelin'
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

(Give you up, give you up)
Never gonna give, never gonna give
(Give you up)
Never gonna give, never gonna give
(Give you up)

We've know each other for so long
Your heart's been achin' but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
I just wanna tell you how I'm feelin'
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`
    .split('\n');

const exampleLyricsChords = `G                      A
Were no strangers to love
G                      A
You know the rules and so do I
G                            A
A full commitment's what I'm thinking of
G                               A
You wouldn't get this from any other guy
G             A
I just wanna tell you how I'm feeling
G              A
Gotta make you understand
    
                G       A
Never gonna give you up
                F#m     Bm
Never gonna let you down
                G   A          F#    Bm
Never gonna run around and desert you
                G       A
Never gonna make you cry
                F#m     Bm
Never gonna say goodbye
                G   A          F#   Bm
Never gonna tell a lie and hurt you
    
[Verse]
G                       A
We've known each other for so long
G                             A
Your heart's been aching but you're too shy to say it
G                                A
Inside we both know what's been going on
G                           A
We know the game and were gonna play it
G           A
And if you ask me how Im feeling
G                         A
Dont tell me youre too blind to see
    
[Chorus]
                G       A
Never gonna give you up
                F#m     Bm
Never gonna let you down
                G   A          F#    Bm
Never gonna run around and desert you
                G       A
Never gonna make you cry
                F#m     Bm
Never gonna say goodbye
                G   A          F#   Bm
Never gonna tell a lie and hurt you
                G       A
Never gonna give you up
                F#m     Bm
Never gonna let you down
                G   A          F#    Bm
Never gonna run around and desert you
                G       A
Never gonna make you cry
                F#m     Bm
Never gonna say goodbye
                G   A          F#   Bm
Never gonna tell a lie and hurt you`
    .split('\n');

const exampleTimes = Array.from(Array(exampleLyrics.length).keys())
    .map(i => (i ** 1.7) * 10);
