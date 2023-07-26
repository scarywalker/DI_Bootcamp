class Farm:
    def __init__(self,name):
        self.name=name
        self.inventory = {}

    def add_animal(self,animal,number=1):
        if animal in self.inventory: self.inventory[animal] += number
        else: self.inventory[animal] = number
    
    def get_info(self):
        print(f"{self.name}'s farm\n")
        for item in self.inventory: print(f"{item} : {self.inventory[item]}\n")
        print("    E-I-E-I-0!")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()