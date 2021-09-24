import React from 'react';
import './Lyrics.css';
import LyricsLine from './LyricsLine';

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

export const Lyrics = () => {
    const lines = exampleLyrics.map((line, index) => {
        let content: React.ReactNode = line;
        let current = false;

        if (line === "") {
            content = <br />;
        }

        // for prototyping purposes, highlight the 3rd line of lyrics
        if (index === 2) {
            current = true;
        }

        return <LyricsLine key={index} current={current}>{content}</LyricsLine>;
    });

    return (
        <div className="Lyrics">{lines}</div>
    );
};

export default Lyrics;
