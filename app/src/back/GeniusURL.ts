import config from '../config';
import { GeniusId } from '../util/song';

//This function takes in the song id and returns the Genius URL and connects to the scraper.tsx//
async function getGeniusUrl(id: GeniusId): Promise<string> {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: `https://api.genius.com/songs/${id}`,
        params: { 'access_token': config.GENIUS_API_KEY }
    };

    return axios.request(options).then(function (response: any) {
        return response.data.response.song.url.replace('https://genius.com/', '');
    });
};
export default getGeniusUrl;

