from main import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight,trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        self.bark()

    def play(self,*args):
        dog_names = ""
        for dog in args: 
            dog_names += f", {dog.name}"
        print(f"{self.name}{dog_names} all play together")
    
    def do_a_trick(self):
        ran_num = random.randint(0,3)
        if ran_num == 0: print(f"{self.name} stands on his back legs")
        if ran_num == 1: print(f"{self.name} does a barrel roll")
        if ran_num == 2: print(f"{self.name} shakes your hand")
        else:print(f"{self.name} plays dead")


a = PetDog("a",1,1,True)
print(a.trained)
b = PetDog("b",2,2)
print(b.trained)
c = PetDog("c",3,3)
print(c.trained)

a.train()
print(a.trained)
b.train()
print(b.trained)
c.train()
print(c.trained)

a.play(b,c)

a.do_a_trick()

b.do_a_trick()

c.do_a_trick()