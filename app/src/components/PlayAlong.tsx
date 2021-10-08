import React, {useState} from 'react';
import Lyrics from './Lyrics';
import YouTubePlayer from './YouTubePlayer';
import TranslationPopUp from './TranslationPopUp';

 const PlayAlong = () => {
     return (
         <main>
             <div className="PlayAlong">
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
         </main>
     );
   };
  
 export default PlayAlong;

  const exampleLyrics = `G                      A
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
