# exercise 1
# birthdays = {'a':'1985/09/12','b':'1972/03/25','c':'2006/11/08','d':'1998/07/19','e':'1966/12/03'}
# answer = input("WELCOME\nGime a persons name: ")
# print(f"{answer} birthday is {birthdays.get(answer)}")

# exercise 2
# birthdays = {'a':'1985/09/12','b':'1972/03/25','c':'2006/11/08','d':'1998/07/19','e':'1966/12/03'}
# answer = input(f"WELCOME\nThe birthdays I know are:{birthdays}\nGime one of these names: ")
# print(f"{answer} birthday is {birthdays.get(answer)}")

# exercise 3
# birthdays = {'a':'1985/09/12','b':'1972/03/25','c':'2006/11/08','d':'1998/07/19','e':'1966/12/03'}
# name = input(f"WELCOME\nThe birthdays I know are:{birthdays}\nGime your name: ")
# birthday = input(f"Gime your birhdain in the format “YYYY/MM/DD”: ")
# birthdays.update({name:birthday})
# answer = input(f"The birthdays I know are:{birthdays}\nGime one of these names: ")
# print(f"{answer} birthday is {birthdays.get(answer)}")

# exercise 4
# 1-
# items = {"banana": 4, "apple": 2, "orange": 1.5, "pear": 3}
# for item in items:
#     print(f"{item} costs {items.get(item),}")
# print("and thats all I have in stock.")

# 2-
# items = {"banana": {"price": 4 , "stock":10}, "apple": {"price": 2, "stock":5}, "orange": {"price": 1.5 , "stock":24}, "pear": {"price": 3 , "stock":1}}
# total_cost = 0
# for item in items:
#     total_cost += items.get(item).get("price") * items.get(item).get("stock")
# print(f"Total cost of buying everything is: {total_cost}")