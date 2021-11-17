import config from './config';
import GeniusURL from './GeniusURL';

//This function takes in the search string and returns the first songs id//
 function GeniusSearch(input:any) {
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://api.genius.com/search?q='+input,
      params: {'access_token': config.GENIUS_API_KEY}
    };
    
    axios.request(options).then(function (response:any) {
        GeniusURL(response.data.response.hits[0].result.api_path);
    }).catch(function (error:any) {
        console.error(error);
    });


};
export default GeniusSearch;