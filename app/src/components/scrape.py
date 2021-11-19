import Flask from flask;
import os
import re
import requests
from bs4 import BeautifulSoup
import url


def function(url) =
    page = requests.get(url)
    html = BeautifulSoup(page.text, "html.parser")
    lyrics = html.select_one('div[class^="lyrics"], div[class^="SongPage__Section"]').get_text(separator="\n")
    lyrics = re.sub(r"[\(\[].*?[\)\]]", "", lyrics)
    lyrics = os.linesep.join([s for s in lyrics.splitlines() if s])
    return lyrics
