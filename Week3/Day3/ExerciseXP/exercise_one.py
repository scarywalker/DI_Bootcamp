#  Exercise 1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}"

#     def __int__(self):
#         return int(self.amount)
    
#     def __repr__(self):
#         return f"{self.amount} {self.currency}"
    
#     def __add__(self, other):
#         if isinstance(other, Currency) and self.currency != other.currency:
#             raise TypeError("Cannot add different currencies")
#         elif isinstance(other, Currency):
#             return self.amount + other.amount
#         else:
#             return self.amount + other

#     def __iadd__(self, other):
#         if isinstance(other, Currency) and self.currency != other.currency:
#             raise TypeError("Cannot add different currencies")
#         elif isinstance(other, Currency):
#             self.amount += other.amount
#         else:
#             self.amount += other
#         return self

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))

# print(c1 + 5)

# print(c1 + c2)

# print(c1)

# c1 += 5
# print(c1)

# c1 += c2
# print(c1)

# c1 + c3

#  Exercise 2

# import func as f

# print(f.adding(2,3))

#  Exercise 3

# import random as r

# def sorteio(num:int):
#     if r.randint(1,100) == num: return (f"success message matching{num}")
#     else: pass

# test

# counter = 0

# while not isinstance(sorteio(1),str): counter += 1
# print(counter)

#  Exercise 4

# import string as s
# import random as r

# five_string = ""

# for character in range(5): five_string += s.ascii_letters[r.randint(0,len(s.ascii_letters)-1)]

# print(five_string)

#  Exercise 5

# import datetime as d

# def today():
#     print(d.date.today())

# today()

#  Exercise 6

# import datetime as d
# def to_new_year(): print(f"New year is in {d.datetime(d.datetime.now().year + 1,1,1) - d.datetime.now()} hours")
# to_new_year()

#  Exercise 7

# import datetime as d

# def birthday(year,month,day):
#     time_alive = d.datetime.now() - d.datetime(year,month,day)
#     time_alive_minutes = int(str(time_alive)[0:str(time_alive).index('d')])*24*60 + d.datetime.now().hour*60 + d.datetime.now().minute
#     print(f"You have been alive for {time_alive_minutes} minutes")

# birthday(1997,6,20)

#  Exercise 8

from faker import Faker

fake = Faker()

exercise_list = []

def add_user_fake(langage_code:str): #coldnt find the faker for code language
    exercise_list.append({'name':fake.name(), 'adress':fake.address(), 'langage_code':langage_code})

add_user_fake('python3.7')
add_user_fake('HTML5')

print(exercise_list)