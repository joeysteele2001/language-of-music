# -*- coding: utf-8 -*-
from csv import reader

def vocabSearch(song="uneditedLyrics.html", level="n5copy.csv"):
    with open(level) as myFile, open(song) as mySong, open('foundVocab.csv','w') as output:
        vocab = reader(myFile)
        lyrics = mySong.read()
        outList = []
        counter = 0
        for i in vocab:
            if i[0] in lyrics:
                output.write(i[0] + ', ' + i[2] + "\n")
                counter += 1
                continue
            
    




vocabSearch();
