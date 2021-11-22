from flask import Flask
from flask_cors import CORS
import os
import re
import requests
from bs4 import BeautifulSoup

#Flask server set up

app = Flask(__name__,  static_url_path='', static_folder='src/components')
CORS(app)

@app.route('/<string:path>')
def get(path):
    page = requests.get('https://genius.com/'+path)
    html = BeautifulSoup(page.text, "html.parser")
    lyrics = html.select_one('div[class^="lyrics"], div[class^="SongPage__Section"]').get_text(separator="\n")
    lyrics = re.sub(r"[\(\[].*?[\)\]]", "", lyrics)
    lyrics = os.linesep.join([s for s in lyrics.splitlines() if s])
    return lyrics
