import config from '../config';

//This function takes in the song id and returns the Genius URL and connects to the scraper.tsx//
async function GeniusURL(path: string): Promise<string> {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://api.genius.com' + path,
        params: { 'access_token': config.GENIUS_API_KEY }
    };

    return axios.request(options).then(function (response: any) {
        return response.data.response.song.url.replace('https://genius.com/', '');
    });
};
export default GeniusURL;

