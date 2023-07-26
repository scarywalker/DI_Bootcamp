# Exercise 1

import random

def get_words_from_file():
    f = open('text.txt')
    return f.readlines() # a list of strings

def get_random_sentence(lenght:int):
    sentence = ""
    words = get_words_from_file()
    for word in range(lenght):
        sentence += f"{words[random.randint(0,len(words)-1)][0:-1]} "

    return sentence.lower()

def main():
    print("This program generates a random sentence with length defined by th user.\nAcceptable values are: an integer between 2 and 20.")
    length = int(input("how long you want the sentence to be): "))
    if isinstance(length,int) and length <= 20 and length >=2:
        print(get_random_sentence(length).lower())
    else:
        raise TypeError("Invalid length")
    
main()

