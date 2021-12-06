import config from '../config';


async function translate(input: string): Promise<string> {
  // TODO: remove this limitation for the demo!
  // const limited = input.split(' ')[0];
  const limited = input.split('\n')[0];

  var axios = require("axios").default;

  var options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    //change fr to en to translate other languages to english
    params: {
      to: 'en', 'api-version': '3.0', profanityAction: 'NoAction',
      textType: 'plain'
    },
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
      'x-rapidapi-key': config.TRANSLATE_API_KEY
    },
    data: [{ Text: limited }]
  };
  return axios.request(options).then((response: any) => {
    return (response.data[0].translations[0].text);
  });
};

export default translate;
