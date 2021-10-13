# -*- coding: utf-8 -*-
from csv import reader

def vocabSearch(song="uneditedLyrics.html", level="n5.csv"):
    with open(level) as myFile, open(song) as mySong, open('foundVocab.html','w') as output:
        vocab = reader(myFile)
        lyrics = mySong.read()
        outList = []
        counter = 0
        for i in vocab:
            if i[0] in lyrics:
                if i[0] == i[1]:
                    output.write('<ruby>' + i[0] + '</ruby>' + ', ' + i[2] + "\n")
                else: 
                    output.write('<ruby><rb>' + i[0] + '</rb><rp>(</rp><rt>' + i[1] + '</rt><rp>)</rp></ruby>' + ', ' + i[2] + "\n")
                counter += 1
                continue
            



vocabSearch();
