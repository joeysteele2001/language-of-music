import fallingInLove from '../resources/lyrics/falling-in-love.json';
import gurenge from '../resources/lyrics/gurenge-lisa.json';
import { Milliseconds } from './duration';
import promiseDelay from './promiseDelay';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];
export type AnnotatedText = { text: string, ruby?: string };

export const getLyrics = async (id: string): Promise<Lyrics | undefined> => {
    const result = LYRICS_MAP[id];

    // simulate loading time by waiting 2.5 seconds to give the lyrics
    return promiseDelay(result, 2500);
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
};

const DEFAULT_LYRICS = fallingInLove;
