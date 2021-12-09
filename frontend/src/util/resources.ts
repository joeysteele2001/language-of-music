import { FALLING_LYRICS, GURENGE_LYRICS, Lyrics, PRETENDER_LYRICS, YORU_LYRICS } from './lyrics';
import { FALLING_VOCAB, GURENGE_VOCAB, PRETENDER_VOCAB, VocabList, YORU_VOCAB } from './vocab';
import { promiseDelayRand } from './promiseDelay';

/** A map from YouTube IDs to `Resources`. */
export type ResourceMap = Record<string, Resource>;

export type Resource = {
    lyrics?: Lyrics,
    vocab?: VocabList,
};

export const getResource = async (id: string): Promise<Resource | undefined> => {
    let result: Resource | undefined = DEFAULT_RESOURCE_MAP[id];

    // simulate loading time by waiting 2.5 seconds to give the lyrics
    return promiseDelayRand(result, { mean: 2500, variance: 1500 });
};

export const getResourceOrDefault = async (id?: string): Promise<Resource> => {
    const inputId = id || '';
    return getResource(inputId).then(lyrics => lyrics || DEFAULT_RESOURCE);
};

export const DEFAULT_RESOURCE_MAP: Record<string, Resource> = {
    'vGJTaP6anOU': {
        lyrics: FALLING_LYRICS,
        vocab: FALLING_VOCAB,
    },
    'MpYy6wwqxoo': {
        lyrics: GURENGE_LYRICS,
        vocab: GURENGE_VOCAB,
    },
    'vEyPvak2K9o': {
        lyrics: YORU_LYRICS,
        vocab: YORU_VOCAB,
    },
    'TQ8WlA2GXbk': {
        lyrics: PRETENDER_LYRICS,
        vocab: PRETENDER_VOCAB,
    },
};

const DEFAULT_RESOURCE = {
    lyrics: GURENGE_LYRICS,
    vocab: GURENGE_VOCAB,
};
