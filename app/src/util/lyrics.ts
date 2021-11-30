import fallingInLove from '../resources/lyrics/falling-in-love.json';
import gurenge from '../resources/lyrics/gurenge-lisa.json';
import yoruNiKakeru from '../resources/lyrics/yoru-ni-kakeru.json';
import pretender from '../resources/lyrics/pretender.json';
import { Milliseconds } from './duration';
import { promiseDelayRand } from './promiseDelay';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText, translation?: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];
export type AnnotatedText = { text: string, ruby?: string };

export const getLyrics = async (id: string): Promise<Lyrics | undefined> => {
    const result = LYRICS_MAP[id];

    // simulate loading time by waiting 2.5 seconds to give the lyrics
    return promiseDelayRand(result, { mean: 2500, variance: 1500 });
};

export const getLyricsOrDefault = async (id?: string): Promise<Lyrics> => {
    const inputId = id || '';
    return getLyrics(inputId).then(lyrics => lyrics || DEFAULT_LYRICS);
};

type LyricsMap = {
    [id: string]: Lyrics;
};

const LYRICS_MAP: LyricsMap = {
    'vGJTaP6anOU': fallingInLove,
    'MpYy6wwqxoo': gurenge,
    'vEyPvak2K9o': yoruNiKakeru,
    'TQ8WlA2GXbk': pretender,
};

console.log(gurenge);

// TODO: add times to Pretender and Yoru... lyrics

const DEFAULT_LYRICS = fallingInLove;
