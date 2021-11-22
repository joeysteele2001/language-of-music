import songs from '../resources/songs.json';
import { promiseDelayRand } from './promiseDelay';

export type Song = {
    title: string,
    artist?: string,
    videoId: string,
};

export const DEFAULT_SONG: Song = songs[0];

export const getSong = async (id: string): Promise<Song | undefined> => {
    const result = songs.find(song => song.videoId === id);

    // simulate loading time by waiting to give the song
    return promiseDelayRand(result, { mean: 1500, variance: 1000 });
};

export const getSongOrDefault = async (id?: string): Promise<Song> => {
    const inputId = id || '';
    return getSong(inputId).then(song => song || DEFAULT_SONG);
};
