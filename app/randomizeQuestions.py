# -*- coding: utf-8 -*-
from random import sample

# takes in a song's vocab list file and creates a file with a unique subset 
# of questions (default 5) to display in the quiz
# the first line is the correct answer, followed by the correct answer choice
# and then a default of three incorrect answer choices
# only Japanese is provided for incorrect answers
def randomizeQuestions(file, numberOfQuestions=5):
    with open(file) as myList, open('questionList.html', 'w') as output:
        lines = myList.readlines()
        if numberOfQuestions > len(lines):
            numberOfQuestions = len(lines)
        indices = sample(range(0, len(lines)), numberOfQuestions)
        count = 1
        for i in indices:
            output.write('<div id=q' + str(count) + '>' + '\n') #  add id to div tags
            output.write('\t' + '<div>' + ' '.join(lines[i].split()[1:]) + '</div>' + '\n')
            output.write('\t' + lines[i].split()[0][:-1] + '\n')
            incorrectIndices = incorrectAnswers(file, i, lines)
            for j in incorrectIndices:
                output.write('\t' + lines[j].split()[0][:-1] + '\n')
            output.write('</div>' + '\n' + '\n')
            count += 1

# helper function that generates incorrect answer choice indices with no repeats
# default three incorrect choices
def incorrectAnswers(file, correctIndex, lines, numberOfAnswers=3):
    with open(file) as myList:
        if numberOfAnswers > len(lines) - 1:
            numberOfAnswers = len(lines) - 1
        indices = sample(range(0, len(lines)), numberOfAnswers)
        count = 0
        for i in indices:
            while indices[count] == correctIndex:
                newIndex = sample(range(0, len(lines)), 1)
                if any(newIndex == j for j in indices):
                    continue
                else:
                    indices[count] = newIndex[0]
            count += 1                
        return indices    
        


randomizeQuestions('GurengeBeginnerVocab.html')