# exercise 1
# a=[1,2,3,4]
# b=[5,6,7,8]
# a.extend(b)

# exercise 2
# for number in range(1500,2500):
#     if number % 5 == 0 or number % 7 == 0:
#         print(number)

#exercise 3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# name = input('Gime your name pls: ')
# if name in names:
#     print(names.index(name))

#exercise 4
# numbers_strings = input("gime 3 numbers separated by a space: ").split()
# numbers = []
# for x in numbers_strings:
#     numbers.append(int(x))
# if numbers[0] >= numbers[1] and numbers[0] >= numbers[2]:
#     print(f"The greatest number is: {numbers[0]}")
# elif numbers[1] >= numbers[2]:
#     print(f"The greatest number is: {numbers[1]}")
# else:
#     print(f"The greatest number is: {numbers[2]}")

#exercise 5
# alphabet = "abcdefghijklmnopqrstuvwxyz"
# for letter in alphabet:
#     if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":
#         print("vowel")
#     else:
#         print("consonant")

#exercise 6
# words = input("gime 7 words separated by a space: ").split()
# letter = input("Gime a letter: ")
# for x in words:
#     if letter in x:
#         print(x.index(letter))
#     else:
#         print(f"friendly message with the word({x}) and the letter({letter}).")

#exercise 7
# a = range(1,1000001)
# print(min(a),max(a),sum(a))

#exercise 8
# number_list = input("Gime a sequence of comma-separated numbers: ").split()
# print(number_list,tuple(number_list))

#exercise 9
# import random
# user_number = int(input("input a number from 1 to 9: "))
# if user_number == random.randrange(1,9):
#     print("Winner")
# else:
#     print("better luck next time")