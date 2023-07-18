# challenge 1
# word = [*input("Gime a word: ")]
# letters = list(set(word))
# letters2 = {}
# for letter in letters:
#     letters2.update({letter:[]})
# for x in range(0,len(word)):
#     letters2[word[x]] += [x]
# print(letters2)

# challenge 2
# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2", "TV": "$1000"}
# wallet = "$100"
# affordable = []
# for x in items_purchase:
#     if int(wallet.strip('$')) >= int(items_purchase.get(x).strip('$')):
#         affordable.append(x)
# if affordable == []:
#     print("Nothing")
# else:
#     print(affordable)