from flask import Flask, send_from_directory, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from src.components.HelloApiHandler import HelloApiHandler
import os
import re
import requests
from bs4 import BeautifulSoup

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