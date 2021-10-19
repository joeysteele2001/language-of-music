# -*- coding: utf-8 -*-
from csv import reader

def vocabSearch(song="uneditedLyrics.html", level="n5copy.csv"):
    with open(level) as myFile, open(song) as mySong:
        vocab = reader(myFile)
        lyrics = mySong.read()
        outList = []
        for i in vocab:
            if i[0] in lyrics:
                outList += {i[2]: i[0]}
                continue
            
    print(outList)




vocabSearch();
