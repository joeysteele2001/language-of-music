 import config from '../config';
 
 function translate(input:string){
    var axios = require("axios").default;

    var options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {to: 'fr', 'api-version': '3.0', profanityAction: 'NoAction',
    textType: 'plain'},
    headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
    'x-rapidapi-key': config.TRANSLATE_API_KEY
      },
    data: [{Text: input}]
    };
axios.request(options).then(function(response:any) {
	return(response.data[0].translations[0].text);
});
};

export default translate;
