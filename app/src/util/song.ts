import songs from '../resources/songs.json';

export type Song = {
    title: string,
    artist?: string,
    videoId: string,
};

export const DEFAULT_SONG: Song = songs[0];

// TODO: make me async
export const getSong = (id: string): Song | undefined => {
    return songs.find(song => song.videoId === id);
};

export const getSongOrDefault = (id?: string): Song => {
    return (id && getSong(id)) || DEFAULT_SONG;
};
