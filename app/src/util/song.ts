
import YoutubeID from '../back/YoutubeID';
import { Language } from './language';
import { promiseDelayRand } from './promiseDelay';
import { DEFAULT_LIBRARY, SongLibrary } from './songLibrary';

export type Song = {
    title: string,
    artist?: string,
    videoId: string,
    language: Language,
    hq: boolean,
};

export const DEFAULT_SONG: Song = DEFAULT_LIBRARY.songs[0];

export const getSong = async (
    id: string,
    library: SongLibrary = DEFAULT_LIBRARY
): Promise<Song | undefined> => {
    const result = library.songs.find(song => song.videoId === id);

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
