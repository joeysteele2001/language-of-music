import config from '../config';

//This function takes in the search string and returns the first songs id//
async function GeniusSearch(input: string): Promise<string> {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://api.genius.com/search?q=' + input,
        params: { 'access_token': config.GENIUS_API_KEY }
    };

    return axios.request(options).then(function (response: any) {
        return response.data.response.hits[0].result.api_path;
    });

};
export default GeniusSearch;