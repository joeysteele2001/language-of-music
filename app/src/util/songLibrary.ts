import { Language } from './language';
import { promiseDelayRand } from './promiseDelay';
import { SongMetadata } from './song';
import SongDataCache from './songDataCache';

export class SongLibrary {
    songs: SongMetadata[];
    languages: Set<Language>;

    constructor(songs: SongMetadata[] = SongDataCache.toLibrary()) {
        this.songs = songs;
        this.languages = new Set(this.songsArr.map(song => song.language));
    }

    get songsArr() {
        return Object.values(this.songs);
    }
}

let library: SongLibrary | undefined;

export const getLibrary = async (): Promise<SongLibrary> => {
    if (!library) {
        return promiseDelayRand(new SongLibrary(), { mean: 1000, variance: 500 })
            .then((lib) => {
                library = lib;
                return lib;
            });
    } else {
        // we know the library variable is never unset, so it's safe to assume it's not undefined
        return new Promise(resolve => resolve(library!));
    }

};
