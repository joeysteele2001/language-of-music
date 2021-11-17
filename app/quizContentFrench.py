from csv import reader


# Creates a list of all vocab words present in a song based on the 5000 most 
# common words in French
# find vocab lists at different levels?
def vocabSearch(song):
    with open('5000_wordlist_french.csv') as myFile, open(song + '.html') as mySong, open(str(song) + 'Vocab.html','a') as output:
        vocab = reader(myFile)
        lyrics = mySong.read()
        outList = []
        counter = 0
        for i in vocab:
            if i[1] in lyrics:
                output.write(i[1] + ', ' + i[2] + '\n')
                counter += 1
                continue

#find test song
vocabSearch("")