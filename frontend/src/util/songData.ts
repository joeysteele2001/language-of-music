import { geniusSong } from "../back/GeniusSearch";
import Scraper from "../back/scraper";
import translate from "../back/translate";
import YoutubeID from "../back/YoutubeID";
import { LyricsText } from "./lyrics";
import { Resource } from "./resources";
import { GeniusId, GeniusUrl, SongMetadata } from "./song";
import SongDataCache from "./songDataCache";

export type SongData = {
    resource: Resource,
    metadata: SongMetadata,
};

export const loadSongData = async (id: GeniusId): Promise<SongData> => {
    // Attempt to load cached song data
    const cached = SongDataCache.get(id);
    if (cached) {
        return new Promise(resolve => resolve(cached));
    }

    // Get song metadata (including URL)
    const metadata = await getMetadata(id);

    // Scrape the lyrics
    const resource = await getResource(metadata.genius.url);

    const songData = { resource, metadata };
    SongDataCache.cache(id, songData);

    return songData;
};

const formatLyrics = (lyrics: string): LyricsText => {
    return lyrics.split('\n').map(line => [{ text: line }]);
}

const getResource = async (url: GeniusUrl): Promise<Resource> => {
    const originalLyrics = await Scraper(url);
    const originalTranslation = await translate(originalLyrics);

    const lyrics = formatLyrics(originalLyrics);
    const translation = formatLyrics(originalTranslation);

    return { lyrics: { lyrics, translation } };
};

export const getMetadata = async (id: GeniusId): Promise<SongMetadata> => {
    const geniusInfo = await geniusSong(id);

    let youtubeId = geniusInfo.youtubeId;
    if (!youtubeId) {
        const title = geniusInfo.title;
        const artist = geniusInfo.artist;
        youtubeId = await YoutubeID(`${title} by ${artist}`);
    }

    return {
        genius: {
            id,
            url: geniusInfo.url,
        },
        videoId: youtubeId,
        title: geniusInfo.title,
        artist: geniusInfo.artist,
        thumbnailUrl: geniusInfo.thumbnailUrl,
        hq: false,
        language: "unknown",
    };
};
