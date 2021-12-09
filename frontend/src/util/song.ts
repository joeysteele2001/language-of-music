
import { Language } from './language';
import { promiseDelayRand } from './promiseDelay';
import { SongLibrary } from './songLibrary';

export type GeniusId = number;
export type GeniusUrl = string;

export type GeniusInfo = {
    id: GeniusId,

    /** The portion of the Genius url after `https://genius.com/` */
    url: GeniusUrl,
};

export type SongMetadata = {
    genius: GeniusInfo,
    videoId: string,
    title: string,
    artist?: string,
    thumbnailUrl?: string,
    hq: boolean,
    language: Language,
};

export type Song = {
    title: string,
    artist?: string,
    videoId: string,
    genius?: GeniusInfo,
    language: Language,
    hq: boolean,
};

export const DEFAULT_SONG: Song = new SongLibrary().songsArr[0];

export const getSong = async (
    id: string,
    library: SongLibrary = new SongLibrary()
): Promise<Song | undefined> => {
    const result = library.songsArr.find(song => song.videoId === id);

    // simulate loading time by waiting to give the song
    return promiseDelayRand(result, { mean: 1500, variance: 1000 });
};

export const getSongOrDefault = async (
    id?: string,
    library?: SongLibrary
): Promise<Song> => {
    const inputId = id || '';
    return getSong(inputId, library).then(song => song || DEFAULT_SONG);
};
