import GeniusSearch from "../back/GeniusSearch";
import GeniusURL from "../back/GeniusURL";
import YoutubeID from "../back/YoutubeID";
import { Song } from "./song";

export const addSong = async (songQuery: string): Promise<Song> => {
    const youtubeId = YoutubeID(songQuery);
    const geniusId = GeniusSearch(songQuery).then(GeniusURL);

    // TODO: find song title and artist
    return new Promise(resolve => resolve({
        title: 'new song',
        artist: 'new artist',
        videoId: 'MpYy6wwqxoo',
        language: 'unknown',
        hq: false,
    }));

};