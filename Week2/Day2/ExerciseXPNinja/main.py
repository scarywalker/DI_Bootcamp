# exercise 1
# for d in input(" a comma-separated string of numbers pls: ").split(","):
#     q = (2*50*int(d)/30)**0.5
#     print(q)

# exercise 2
# numbers_strings = input(" a comma-separated string of numbers pls: ").split(",")
# numbers = []
# for x in range(0,len(numbers_strings)):
#     numbers.append(int(numbers_strings[x]))
# first_last = [numbers[0] , numbers[-1]]
# greater = []
# smaller = []
# square = []
# unique = []
# for x in numbers:
#     if x > 50:
#         greater.append(x)
#     elif x < 10:
#         smaller.append(x)
#     square.append(x**2)
#     if x not in unique:
#         unique.append(x)
# print(numbers)
# numbers.sort()
# print(numbers)
# print(sum(numbers))
# print(first_last)
# print(greater)
# print(smaller)
# print(square)
# print(unique, f"{len(unique)} unique numbers")
# print(sum(numbers)/len(numbers))
# print(numbers[-1])
# print(numbers[0])

# exercise 3
# text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate finibus mauris, a congue libero fringilla vitae. Phasellus sollicitudin nunc in purus rhoncus, id rutrum urna volutpat. Proin quis consequat nunc, vitae commodo massa. Integer at ligula sit amet magna interdum cursus. Nunc condimentum congue nisi, non pellentesque nisl ullamcorper eu. Etiam scelerisque, velit nec semper consectetur, leo tellus mattis purus, ac scelerisque urna metus vel arcu. Integer condimentum tortor non lacus fermentum, vitae vestibulum neque dignissim."
# print(f"Characters: {len(text)}\nSentences: {len(text.split('.'))}\nWords: {len(text.split())}\nUnique Words: {len(set(text.split()))}")

# exercise 4
# text = (input("Gime an input: ").split())
# for word in set(text):
#     print(f"{word}:{text.count(word)}")