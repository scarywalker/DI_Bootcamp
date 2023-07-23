# Exercise 1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat('preto', 8)
# cat2 = Cat('branco', 17)
# cat3 = Cat('tigre', 6)

# def find_old(cat_list: list[Cat]) -> Cat | None :
#     if len(cat_list) == 0 :
#         return None
    
#     oldest_cat = cat_list[0]

#     for cat in cat_list:
#         if cat.age > oldest_cat.age:
#             oldest_cat = cat
#     return oldest_cat

# old = find_old([cat1,cat2,cat3])

# print(old.name)

# Exercise 2

# class Dog:
#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height

#     def bark(self): 
#         print(f"{self.name} goes wolf")
#     def jump(self): 
#         print(f"{self.name} jumps {self.height*2} cm high!")

# davids_dog = Dog('Rex',50)
# sarahs_dog = Dog("Teacup",20)

# print(davids_dog.name,davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()

# print(sarahs_dog.name,sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height < sarahs_dog.height : print(sarahs_dog.name)
# else: print(davids_dog.name)

# Exercise 3

# class Song:
#     def __init__(self,lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self): 
#         for line in self.lyrics: print(line)

# stairway= Song(["There's a lady who's sure","all that glitters is gold", "and she's buying a stairway to heaven"])

# stairway.sing_me_a_song()

# Exercise 4

# class Zoo:
#     def __init__(self,name):
#         self.name = name
#         self.animals = []
    
#     def add_animal(self,new_animal) :
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     def get_animals(self):
#         for animal in self.animals: print(animal)

#     def sell_animal(self,animal_to_sell):
#         if animal_to_sell in self.animals:
#             self.animals.remove(animal_to_sell)

#     def sort_animals(self):
#         animals_sorted = {}
#         for animal in self.animals:
#             if animal[0] not in animals_sorted:
#                 animals_sorted[animal[0]] = [animal]
#             else: 
#                 animals_sorted[animal[0]] += [animal]
#         self.animals = animals_sorted

#     def get_groups(self,letter):
#         if letter in self.animals:
#                 print(self.animals[letter])

# ramat_gan_safari = Zoo('cachorro')

# ramat_gan_safari.add_animal("vaca")
# ramat_gan_safari.add_animal("cachorro")
# ramat_gan_safari.add_animal("baleia")
# ramat_gan_safari.add_animal("macaco")
# ramat_gan_safari.add_animal("avestruz")
# ramat_gan_safari.add_animal("babuino")
# ramat_gan_safari.add_animal("mico")
# ramat_gan_safari.add_animal("galinha")
# ramat_gan_safari.add_animal("porco")

# ramat_gan_safari.get_animals()

# ramat_gan_safari.sell_animal("porco")

# ramat_gan_safari.get_animals()

# ramat_gan_safari.sort_animals()

# ramat_gan_safari.get_groups("b")

