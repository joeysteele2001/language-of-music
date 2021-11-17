import config from './config';
 
//This function returns the youtube id of a song//
 function YoutubeID() {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://api.genius.com/search?q=on%20ira',
      params: {'access_token': config.GENIUS_API_KEY}
    };
    
    axios.request(options).then(function (response:any) {
        console.log(response.data);
    }).catch(function (error:any) {
        console.error(error);
    });
    return('genius')

};
export default YoutubeID;