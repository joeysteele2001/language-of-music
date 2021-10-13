# -*- coding: utf-8 -*-
from csv import reader

def vocabSearch(song="Gurenge", level=5):
    with open('n' + str(level) + '.csv') as myFile, open(song + '.html') as mySong, open(str(song) + 'Level' + str(level) + '.html','w') as output:
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
            



vocabSearch(song="YoruNiKakeru", level=5)
vocabSearch(song="YoruNiKakeru", level=4)
vocabSearch(song="YoruNiKakeru", level=3)
vocabSearch(song="YoruNiKakeru", level=2)
vocabSearch(song="YoruNiKakeru", level=1)