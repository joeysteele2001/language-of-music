import config from './config';
import Scraper from './scraper';
 
//This function takes in the song id and returns the Genius URL - needs to be sent to the scrape.py with flask server//
 function GeniusURL(path:any) {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://api.genius.com'+path,
      params: {'access_token': config.GENIUS_API_KEY}
    };
    
    axios.request(options).then(function (response:any) {
        console.log(response.data.response.song.url),
        Scraper(response.data.response.song.url);
    }).catch(function (error:any) {
        console.error(error);
    });

};
export default GeniusURL;

