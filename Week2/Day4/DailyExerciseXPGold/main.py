# exercise 1
# year = 2023
# month = 7
# day = 20
# def get_age(year, month, day):
#     """call giving current date, ask for birthdate input and spits age"""
#     birth = input("Gime your date of birth in a 'year,month,day' format: " ).split(",")
#     age = year - int(birth[0]) - 1
#     if int(birth[1]) * 100 + int(birth[2]) <= month * 100 + day:
#         age += 1
#     return age

# def can_retire(gender):
#     """checks if can retire"""
#     age = get_age(year, month, day)
#     return (gender == 'f' and age >= 62) or (gender == 'm' and age >= 67)

# print(can_retire('f'))

# exercise 2
# original_string = input("Gime a digit: ")

# def strange_sum(x):
#     """accepts one parameter returns the value of x+xx+xxx+xxxx"""
#     return int(x) + int(x*2) + int(x*3) + int(x*4)

# print(strange_sum(original_string))

# exercise 3
# import random

# def throw_dice():
#     """random number generator 1-6"""
#     return random.randint(1,6)

# def throw_until_doubles():
#     """throw_dice function in pairs, till they match and spits the attempt count"""
#     dice1, dice2 = 0,1
#     throw_count = 0
#     while dice1 != dice2:
#         throw_count += 1
#         dice1 = throw_dice()
#         dice2 = throw_dice()
#     return throw_count

# def main():
#     """throw_until_doubles 100 times and prints the sum of the output and the avarage output"""
#     throw_count = 0
#     for round in range(100):
#         throw_count += throw_until_doubles()
#     print({f"Total throws: {throw_count}"})
#     print({f"Average throws to reach doubles: {throw_count/100}"})

# main()