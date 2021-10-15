import React from 'react';
import Lyrics from './Lyrics';
import YouTubePlayer from './YouTubePlayer';
import translate from './translate';

const JustListen = () => {
    return (
        <div className="JustListen">
            <h1>Song Title</h1>
            <YouTubePlayer
                id="music-video-player"
                title="Music Video Player"
                videoId="dQw4w9WgXcQ"
            />
            <Lyrics times={exampleTimes}>
                {exampleLyrics}
            </Lyrics>
       
        </div>
    );
};

export default JustListen;

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


const testlyrics = `強くなれる理由を知った 僕を連れて進め
泥だらけの走馬灯に酔う こわばる心
震える手は掴みたいものがある それだけさ
夜の匂いに (I'll spend all thirty nights)
空睨んでも (Staring into the sky)
変わっていけるのは自分自身だけ それだけさ
強くなれる理由を知った 僕を連れて進め
どうしたって！
消せない夢も 止まれない今も
誰かのために強くなれるなら
    ありがとう 悲しみよ
    世界に打ちのめされて 負ける意味を知った
    紅蓮の華よ咲き誇れ！ 運命を照らして
    イナビカリの雑音が耳を刺す 戸惑う心
    優しいだけじゃ守れないものがある？ わかってるけど
    水面下で絡まる善悪 透けて見える偽善に天罰
    Tell me why, Tell me why, Tell me why, Tell me...
    I don't need you!
    逸材の花より 挑み続け咲いた一輪が美しい
    乱暴に敷き詰められた トゲだらけの道も
    本気の僕だけに現れるから 乗り越えてみせるよ
    簡単に片付けられた 守れなかった夢も
    紅蓮の心臓に根を生やし この血に宿って
    人知れず儚い 散りゆく結末
    無情に破れた 悲鳴の風吹く
    誰かの笑う影 誰かの泣き声
    誰もが幸せを願ってる
    どうしたって！
    消せない夢も 止まれない今も
    誰かのために強くなれるなら
    ありがとう 悲しみよ
    世界に打ちのめされて 負ける意味を知った
    紅蓮の華よ咲き誇れ！ 運命を照らして
    運命を照らして`