import defaultLibrary from '../resources/songs.json';
import { parseLanguageCode } from './language';
import { promiseDelayRand } from './promiseDelay';
import { Song } from './song';

export type SongLibrary = Song[];

/** Do not use me publicly! */
export const DEFAULT_LIBRARY = (() => (
    // parse the language names in songs.json
    defaultLibrary.map(song => {
        const language = parseLanguageCode(song.language);
        return { ...song, language };
    })
))();

let library: SongLibrary | undefined;

export const getLibrary = async (): Promise<SongLibrary> => {
    if (!library) {
        return promiseDelayRand(DEFAULT_LIBRARY, { mean: 1000, variance: 500 })
            .then((lib) => {
                library = lib;
                return lib;
            });
    } else {
        // we know the library variable is never unset, so it's safe to assume it's not undefined
        return new Promise(resolve => resolve(library!));
    }

};
