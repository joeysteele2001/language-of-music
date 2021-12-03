import config from '../config';

interface Response {
    data: Data;
}

interface Data {
    items: Item[];
}

interface Item {
    id: Id;
}

interface Id {
    videoId: string;
}

//TODO incorporate with new song page so that it works for any song
//This function returns the youtube id of a song in the console log//
async function YoutubeID(input: string): Promise<string[]> {
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
        params: { maxResults: 5, q: input, key: config.YOUTUBE_API_KEY }
    };

    return axios.request(options).then(function (response: Response) {
        const ids = response.data.items.map (item => item.id.videoId);
        console.log(ids[0]);
        return ids[0];
    }).catch(function (error: any) {
        console.error(error);
    });

};
export default YoutubeID;