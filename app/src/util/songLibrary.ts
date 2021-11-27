import defaultLibrary from '../resources/songs.json';
import { Language, parseLanguageCode } from './language';
import { promiseDelayRand } from './promiseDelay';
import { Song } from './song';

export type SongLibrary = {
    songs: Song[],
    languages: Set<Language>,
};

/** Do not use me publicly! */
export const DEFAULT_LIBRARY: SongLibrary = (() => {
    // parse the language names in songs.json
    const songs = defaultLibrary.map(song => {
        const language = parseLanguageCode(song.language);

        // hack to check whether the song has an `hq` property that is truthy
        const hq = (song as any).hq ? true : false;

        return { ...song, language, hq };
    });

    const languages = new Set(songs.map(song => song.language));

    return { songs, languages };

})();

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
