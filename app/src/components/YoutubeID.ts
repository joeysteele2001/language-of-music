import config from '../config';
 
//This function returns the youtube id of a song in the console log//
 function YoutubeID(input:any) {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
      params: {maxResults : 5, q : input, key: config.YOUTUBE_API_KEY}
    };
    
    axios.request(options).then(function (response:any) {
        console.log(response.data.items[0].id.videoId);
    }).catch(function (error:any) {
        console.error(error);
    });
    return('genius')

};
export default YoutubeID;