//connects to flask server to get lyrics, alreadly formatted
//TODO - this is the part that will return lyrics for the song page
//you need to install flask and beautiful soup first then put 'flask run' in a new terminal
//change consolelog to return when incorporating into the lyric display
async function Scraper(path: string): Promise<string> {
  var axios = require("axios");

  return axios.get('http://127.0.0.1:5000/' + path).then((response: any) => {
    var lyrics = response.data.replace('Embed\nShare URL\nCopy\nEmbed\nCopy\nCancel\nHow to Format Lyrics:\nType out all lyrics, even if it’s a chorus that’s repeated throughout the song\nThe Section Header button breaks up song sections. Highlight the text then click the link\nUse Bold and Italics only to distinguish between different singers in the same verse.\nE.g. “Verse 1: Kanye West,', '').replace('Jay-Z\n, \nBoth', '').replace('Capitalize each line', '').replace('To move an annotation to different lyrics in the song, use the  menu to switch to ', '').replace('referent editing mode', '')
    return lyrics;
  });
};
export default Scraper;