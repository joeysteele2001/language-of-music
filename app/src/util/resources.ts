import fallingInLoveLyrics from '../resources/lyrics/falling-in-love.json';
import gurengeLyrics from '../resources/lyrics/gurenge-lisa.json';
import yoruNiKakeruLyrics from '../resources/lyrics/yoru-ni-kakeru.json';
import pretenderLyrics from '../resources/lyrics/pretender.json';

import { Lyrics } from './lyrics';
import { GURENGE_VOCAB, PRETENDER_VOCAB, VocabList, YORU_VOCAB } from './vocab';
import { promiseDelayRand } from './promiseDelay';

export type Resource = {
    lyrics?: Lyrics,
    vocab?: VocabList,
};

export const getResource = async (id: string): Promise<Resource | undefined> => {
    const result = RESOURCES_MAP[id];

    // simulate loading time by waiting 2.5 seconds to give the lyrics
    return promiseDelayRand(result, { mean: 2500, variance: 1500 });
};

export const getResourceOrDefault = async (id?: string): Promise<Resource> => {
    const inputId = id || '';
    return getResource(inputId).then(lyrics => lyrics || DEFAULT_RESOURCE);
};

const RESOURCES_MAP: Record<string, Resource> = {
    'vGJTaP6anOU': {
        lyrics: fallingInLoveLyrics,
    },
    'MpYy6wwqxoo': {
        lyrics: gurengeLyrics,
        vocab: GURENGE_VOCAB,
    },
    'vEyPvak2K9o': {
        lyrics: yoruNiKakeruLyrics,
        vocab: YORU_VOCAB,
    },
    'TQ8WlA2GXbk': {
        lyrics: pretenderLyrics,
        vocab: PRETENDER_VOCAB,
    },
};

const DEFAULT_RESOURCE = {
    lyrics: gurengeLyrics,
    vocab: GURENGE_VOCAB,
};
