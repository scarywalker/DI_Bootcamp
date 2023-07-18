# exercise 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dictio = {item for item in zip(keys, values)}
# print(dictio)

# exercise 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# family_cost = {}
# for name in family.keys():
#     if family.get(name) < 12:
#         if family.get(name) > 2:
#             family_cost.update({name:10})
#         else:
#             family_cost.update({name:0})
#     else:
#         family_cost.update({name:15})
# total_cost = 0
# for cost in family_cost.values():
#     total_cost += int(cost)
# print(total_cost)

# exercise 3
# zara = {"name" : "Zara" ,"creation date": 1975 ,"creator name": "Amancio Ortega Gaona" ,"type of clothes": ['men', 'women', 'children', 'home'] ,"international competitors": ['Gap', 'H&M', 'Benetton'] , "number stores": 7000 ,"major color": {"France": "blue", "Spain": "red", 'US': ['pink', 'green']}}
# zara.update({"number stores": 2})
# print(f'Zaras clients are {zara.get("type of clothes")[0]}, {zara.get("type of clothes")[1]} and {zara.get("type of clothes")[2]}')
# zara.update({"country_creation": 'Spain'})
# if "international competitors" in zara:
#     print( True)
# zara.get("international competitors").append("Desigual")
# zara.pop("creation date")
# print(zara.get("international competitors")[-1])
# print(zara.get("major color").get('US'))
# print(len(zara))
# print(zara.keys())
# more_on_zara = {'creation date': 1975, 'number stores' : 10000}
# zara.update(more_on_zara)
# print(zara.get('number stores'))

# exercise 4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# result 1
# disney_users_A = {item for item in zip(users, range(0,5))}
# print(disney_users_A)

# result 2
# disney_users_B = {item for item in zip(range(0,5), users)}
# print(disney_users_B)

# result 3
# users.sort()
# disney_users_C = {item for item in zip(users, range(0,5))}
# print(disney_users_C)