 import config from './config';

 export interface Props {
    input: string
  }
 
 function translate(props:Props) {
    var axios = require("axios").default;

    var options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    //change fr to en to translate other languages to english
    params: {to: 'fr', 'api-version': '3.0', profanityAction: 'NoAction',
    textType: 'plain'},
    headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
    'x-rapidapi-key': config.TRANSLATE_API_KEY
      },
    data: [{Text: props.input}]
    };
axios.request(options).then((response:any) => {
	 return(response.data[0].translations[0].text);
});
};

export default translate;
