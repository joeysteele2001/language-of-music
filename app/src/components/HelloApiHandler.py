from flask_restful import Api, Resource, reqparse
import os
import re
import requests
from bs4 import BeautifulSoup


class HelloApiHandler(Resource):
    url = 'https://genius.com/Adele-to-be-loved-lyrics'
    def get(self):
        page = requests.get('https://genius.com/Adele-to-be-loved-lyrics')
        html = BeautifulSoup(page.text, "html.parser")
        lyrics = html.select_one('div[class^="lyrics"], div[class^="SongPage__Section"]').get_text(separator="\n")
        lyrics = re.sub(r"[\(\[].*?[\)\]]", "", lyrics)
        lyrics = os.linesep.join([s for s in lyrics.splitlines() if s])
        return {lyrics}