# challenge 1
# entries = input("Gime a number and a length with a space in between: ")
# entries_list = entries.split()
# output_list = []
# counter = 0
# while counter < (int(entries_list[1])) :
#     counter += 1
#     output_list.append(int(entries_list[0]) * counter)
# print(output_list)

# challenge 2
original_string = input("Gime a string: ")
output_string = ""
for character in original_string:
    if output_string.count(character) == 0:
        output_string += character
print(output_string)