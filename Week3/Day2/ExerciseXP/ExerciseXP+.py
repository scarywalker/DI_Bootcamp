#  Exercise 1

class Family:
    def __init__(self,members:list,last_name:str):
        self.members = members
        self.last_name = last_name

    def born(self,**kwargs):
        print("a message congratulating the family.")
        new_child = kwargs
        self.members.append(new_child)

    def is_18(self,name):
        for person in self.members:
            if name in person.values():
                return person['age'] > 18

    def family_presentation(self): 
        name_list = ""
        for person in self.members: name_list += f"{person['name']}, "
        print(f"The {self.last_name} family is composed of {name_list}")

potato = Family([{'name':'Michael','age':35,'gender':'Male','is_child':False}, {'name':'Sarah','age':32,'gender':'Female','is_child':False}],"Potato")

potato.born(name='Batata',age=0,gender='Female',is_child=True)
potato.born(name='Frida',age=0,gender='Female',is_child=True)

potato.is_18('Batata')
potato.is_18('Michael')

potato.family_presentation()

#  Exercise 2

class TheIncredibles(Family):
    def __init__(self, members: list, last_name: str):
        super().__init__(members, last_name)

    def use_power(self,name):
        for person in self.members:
            if name in person.values():
                try:            
                    if not self.is_18(name):
                        raise Exception
                    print(f"The power is {person['power']}")
                except:
                    print("Not older than 18")


            
       
    def incredible_presentation(self):
        self.family_presentation()
        for member in self.members:print(f"{member['incredible_name']} power is {member['power']}") 

incredible = TheIncredibles([{'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},{'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}],'Incredible')

incredible.incredible_presentation()

incredible.born(name='Jack',age=0,gender='male',is_child=True,power='Unknown Power',incredible_name='Baby Jack')

incredible.use_power('Jack')

print(incredible.is_18('Michael'))

incredible.use_power('Michael')

incredible.incredible_presentation()