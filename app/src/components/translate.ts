import config from './config';

function translate(input:string): void{
	var mykey = config.TRANSLATE_KEY;

	fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/detect", {
		"method": "POST",
		"headers": {
			"content-type": "application/x-www-form-urlencoded",
			"accept-encoding": "application/gzip",
			"x-rapidapi-key": mykey,
			"x-rapidapi-host": "google-translate1.p.rapidapi.com"
		},
		"body": JSON.stringify({
			"q": input
		})
	})
	.then(response => {
		console.log(response);
		return(response);
	})
	.catch(err => {
		console.error(err);
	});
};

export default translate;