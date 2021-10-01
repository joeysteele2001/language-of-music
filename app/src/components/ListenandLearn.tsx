import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import QuizPage from './QuizPage';
import Lyrics from './Lyrics';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const ListenandLearn = () => {
    return (
        <div className="JustListen">
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId="dQw4w9WgXcQ"
            />
            <Lyrics times={exampleTimes}>
                {exampleLyrics}
            </Lyrics>

            <BrowserRouter>
                <Link to="/Quiz">Quiz</Link>
                <Route exact path="/Quiz">
                    <QuizPage/>
                </Route>
            </BrowserRouter>
        </div>

    )
};

export default ListenandLearn;

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

const exampleTimes = Array.from(Array(exampleLyrics.length).keys())
    .map(i => (i ** 1.7) * 10);
