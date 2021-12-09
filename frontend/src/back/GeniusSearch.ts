import config from '../config';

export type SearchResult = {
    id: number,
    url: string,
    title: string,
    artist: string,
    thumbnailUrl: string,
    youtubeId?: string,
}

interface ApiResponse {
    data: ResponseData;
}

interface ResponseData {
    response: GeniusResponse;
}

interface GeniusResponse {
    hits: Hit[];
}

interface Hit {
    result: Result;
}

interface Result {
    id: number;
    path: string;
    primary_artist: Artist;
    song_art_image_thumbnail_url: string;
    title: string;
}

interface Artist {
    name: string;
}

//This function takes in the search string and returns the first songs id//
async function GeniusSearch(input: string): Promise<SearchResult> {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://api.genius.com/search?q=' + input,
        params: { 'access_token': config.GENIUS_API_KEY }
    };

    const response: ApiResponse = await axios.request(options);
    const result = response.data.response.hits[0].result;
    const id = result.id;
    const url = result.path.substring(1);
    const title = result.title;
    const artist = result.primary_artist.name;
    const thumbnailUrl = result.song_art_image_thumbnail_url;
    const youtubeId = (await geniusSong(id)).youtubeId;

    return { id, url, title, artist, thumbnailUrl, youtubeId };
};


interface ApiSongResponse {
    data: ApiSongData;
}

interface ApiSongData {
    response: SongResponse;
}

interface SongResponse {
    song: ApiSong;
}

interface ApiSong {
    title: string;
    url: string;
    media: Media[];
    primary_artist: Artist;
    song_art_image_thumbnail_url: string;
}

interface Media {
    provider: string;
    url: string;
}

export type GeniusSong = {
    url: string,
    title: string,
    artist: string,
    thumbnailUrl: string,
    youtubeId?: string;
}

export const geniusSong = async (id: number): Promise<GeniusSong> => {
    const axios = require('axios').default;
    const options = {
        method: 'GET',
        url: `https://api.genius.com/songs/${id}`,
        params: { 'access_token': config.GENIUS_API_KEY },
    };

    return axios.request(options).then((response: ApiSongResponse): GeniusSong => {
        const song = response.data.response.song;
        const {
            title,
            url: geniusUrl,
            media,
            primary_artist,
            song_art_image_thumbnail_url: thumbnailUrl,
        } = song;

        const url = geniusUrl.replace('https://genius.com/', '');
        const artist = primary_artist.name;

        const youtubeMedia = media.find(m => m.provider === "youtube");
        let youtubeId: string | undefined;
        if (youtubeMedia) {
            youtubeId = youtubeMedia.url.split('?v=')[1];
        }

        return { url, title, artist, thumbnailUrl, youtubeId };
    });
}

export default GeniusSearch;