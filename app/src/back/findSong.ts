import GeniusSearch from "./GeniusSearch";
import Scraper from "./scraper";
import translate from "./translate";
import YoutubeID from "./YoutubeID";

export type SongInfo = {
    title: string,
    artist: string,
    youtubeId: string;
    thumbnailUrl: string;
    lyrics: string;
    translated?: string;
};

export const findSong = async (query: string, translation: boolean = false): Promise<SongInfo> => {
    const searchResult = await GeniusSearch(query);
    const youtubeId = searchResult.youtubeId || await YoutubeID(query);
    const lyrics = await Scraper(searchResult.url);

    // TEMPORARY: only translate first word!
    const firstWord = lyrics.split(' ')[0];
    //

    let translated = undefined;
    if (translation) {
        translated = await translate(firstWord)
    };

    const title = searchResult.title;
    const artist = searchResult.artist;
    const thumbnailUrl = searchResult.thumbnailUrl;

    return { title, artist, youtubeId, thumbnailUrl, lyrics, translated };
};