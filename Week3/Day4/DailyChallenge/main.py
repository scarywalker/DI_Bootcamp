class Text:
    def __init__(self,text:str):
        self.text = text.lower().split()
        self.text_dict = {}
        for word in self.text:
            self.text_dict[word] = self.text.count(word)

    def count_word(self,word):
        if word in self.text_dict:
            return f"meningful message {self.text_dict[word]}"
        else:
            return None
    
    def common_word(self):
        max_num = max(self.text_dict.values())
        common = []
        for key in self.text_dict.keys():
            if self.text_dict[key] == max_num:
                common.append(key)
        return common
    
    def unique(self): return self.text_dict.keys()

    @classmethod
    def from_file(cls,file):
        with open(file,"r") as strange_file:
            return cls(strange_file.read())
            

a = 'A good book would sometimes cost as much as a good house'

t = Text(a)

strange = Text.from_file('the_stranger.txt')

print(strange.unique())