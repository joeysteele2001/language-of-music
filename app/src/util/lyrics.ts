import { Milliseconds } from './duration';
import { AnnotatedText } from './text';

import fallingLyrics from '../resources/lyrics/falling-in-love.json';
import gurengeLyrics from '../resources/lyrics/gurenge-lisa.json';
import yoruNiKakeruLyrics from '../resources/lyrics/yoru-ni-kakeru.json';
import pretenderLyrics from '../resources/lyrics/pretender.json';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText, translation?: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];

const mergeLyricsAndTranslation = (lyrics: Lyrics, translation?: { translation: LyricsText }) => {
    if (!translation) {
        return lyrics;
    }

    return {
        ...lyrics,
        translation: translation.translation,
    };
};

export const GURENGE_LYRICS = mergeLyricsAndTranslation(gurengeLyrics);
export const YORU_LYRICS = mergeLyricsAndTranslation(yoruNiKakeruLyrics);
export const PRETENDER_LYRICS = mergeLyricsAndTranslation(pretenderLyrics);
export const FALLING_LYRICS = mergeLyricsAndTranslation(fallingLyrics);

// TODO: add times to Pretender and Yoru... lyrics
