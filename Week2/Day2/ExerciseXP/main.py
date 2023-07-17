# exercise 1
# my_favorite_numbers = {1,2,3,4}
# my_favorite_numbers.add(5)
# my_favorite_numbers.add(6)
# my_favorite_numbers.remove(6)
# friend_fav_numbers = {9,4,7,12,3}
# our_fav_numbers = my_favorite_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# exercise 2
# No, you have to convert it to list than convert it back after modifications

# exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0,"Apples")
# apple_count=basket.count("Apples")
# basket.clear()
# print(basket)

# exercise 4
# 1-floats can represent rational numbers, while integers are integers
# 2- I don't undestand the question, what would constitute the original way and the other way??????
# numbers = []
# number = 1
# while number <5:
#     number += 0.5
#     numbers.append(number)
# print(numbers)

# exercise 5
# for x in range(1,21):
#     print(x)

# for x in range(1,21):
#     if x % 2 == 0:
#         print(x)

# exercise 6
# my_name = "gabriel"
# user_name = ""
# while not my_name == user_name:
#     user_name = input("gime your name: ")

# exercise 7
# favorite_fruits_string = input("gime your favorite fruit(s), separate the fruits with a single space, eg. \"apple mango cherry\".: ")
# favorite_fruits_list = favorite_fruits_string.split()
# if favorite_fruits_list.count(input("input the name of any fruit: ")) > 0 :
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")

# exercise 8
# toppings_list = []
# price = 10.0
# while True:
#     topping = input("For new topping say it's name, for stopping say \"quit\": ")
#     if topping == "quit":
#         break
#     else: 
#         toppings_list.append(topping)
#         price += 2.5
#         print(f"I'll add {topping} to your pizza")
# print(toppings_list,price)

# exercise 9 -1,2,3
# price_list = []
# price = 0
# while True:
#     age = int(input("For new ticket say the age of the buyer, for stopping say \"200\": "))
#     if age == 200:
#         break
#     else: 
#         if age < 3:
#             price_list.append("free")
#         elif age < 13:
#             price_list.append(10)
#             price += 10
#         else:
#             price_list.append(15)
#             price += 15
# print(f"Your bill is {price_list} for each ticket and {price} for the total amount")

# exercise 9 -4
# name_string = input("Give me your names in the following format, \"name1 name2 name3 name4 etc...\": ")
# original_name_list = name_string.split()
# name_list = original_name_list[:]
# for name in original_name_list:
#     age = int(input(f"{name} tell me your age: "))
#     if 21 >= age <= 16 :
#         name_list.remove(name)
# print(name_list)

# exercise 10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# while sandwich_orders.count("Pastrami sandwich") > 0:
#     sandwich_orders.remove("Pastrami sandwich")
# finished_sandwiches = []
# while sandwich_orders != [] :
#     finished_sandwiches.append(sandwich_orders[0])
#     sandwich_orders.remove(sandwich_orders[0])
# for sandwich in finished_sandwiches:
#     print(f"I made your {sandwich}")
