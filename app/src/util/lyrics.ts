import fallingInLove from '../resources/lyrics/falling-in-love.json';
import gurenge from '../resources/lyrics/gurenge-lisa.json';
import { Milliseconds } from './duration';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];
export type AnnotatedText = { text: string, ruby?: string };

export const getLyrics = (id: string): Lyrics | undefined => {
    return LYRICS_MAP[id];
};

export const getLyricsOrDefault = (id?: string): Lyrics => {
    return (id && getLyrics(id)) || fallingInLove;
};

type LyricsMap = {
    [id: string]: Lyrics;
};

const LYRICS_MAP: LyricsMap = {
    'vGJTaP6anOU': fallingInLove,
    'MpYy6wwqxoo': gurenge,
};
