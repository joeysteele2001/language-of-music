import config from './config';
 
 function getLyrics(): void{
    var axios = require("axios").default;
    var options = {
      method: 'GET',
      url: 'https://api.genius.com/songs/378195',
      params: {'access_token': config.GENIUS_API_KEY}
    };
    
    axios.request(options).then(function (response:any) {
        console.log(response.data);
    }).catch(function (error:any) {
        console.error(error);
    });
};
export default getLyrics;