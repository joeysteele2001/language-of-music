# -*- coding: utf-8 -*-
from random import sample

# takes in a song's vocab list file and creates a file with a unique subset 
# of those vocab words (default 5 words) to display in the quiz
def randomizeQuestions(file, numberOfQuestions=5):
    with open(file) as myList, open('questionList.html', 'w') as output:
        lines = myList.readlines()
        if numberOfQuestions > len(lines):
            numberOfQuestions = len(lines)
        indices = sample(range(0, len(lines)), numberOfQuestions)
        for i in indices:
            output.write(lines[i])

randomizeQuestions('GurengeBeginnerVocab.html')