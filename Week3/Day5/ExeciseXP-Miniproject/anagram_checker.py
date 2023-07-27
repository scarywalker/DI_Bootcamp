class AnagramChecker:
    
    def __init__(self) -> None:
        word_list = open('Week3\Day5\ExeciseXP-Miniproject\sowpods.txt').read().splitlines()
        self.word_dict = {}
        for word in word_list:
            self.word_dict[word] = {}
            for index in range(len(word)):
                self.word_dict[word][word[index]] = word.count(word[index])

    def is_valid_word(self,word:str):
        if len(word.split()) > 1 or\
            not word[0].isalpha():
            raise TypeError("Invalid word")
        else: 
            return True
        
    def get_anagrams(self,word:str):
        word = word.upper()
        this_word = {}
        for index in range(len(word)):
            this_word[word[index]] = word.count(word[index])
        anagrams = []
        for dictio in self.word_dict:
            if self.word_dict[dictio] == this_word:
                anagrams.append(dictio)
        return anagrams
        
    def is_anagram(self,word1:str, word2:str):
        return word2.upper() in self.get_anagrams(word1.upper())


