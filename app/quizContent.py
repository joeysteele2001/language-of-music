# -*- coding: utf-8 -*-
from csv import reader


# Creates a list of all vocab words present in a song for a specified level
# Beginner: n5, Intermediate: n4, Advanced: n3-n1
def vocabSearch(song, level):
    if level == 'Beginner':
        helper(song, 5, level)
    elif level == 'Intermediate':
        helper(song, 4, level)
    elif level == 'Advanced':
        helper(song, 3, level)
        helper(song, 2, level)
        helper(song, 1, level)
            

def helper(song, number, level):
    with open('n' + str(number) + '.csv') as myFile, open(song + '.html') as mySong, open(str(song) + str(level) + 'Vocab.html','a') as output:
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


vocabSearch("Pretender", "Beginner")
vocabSearch("Pretender", "Intermediate")
vocabSearch("Pretender", "Advanced")