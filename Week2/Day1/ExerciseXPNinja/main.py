# exercise 1
# done

# exercise 2
# done

# exercise 3
# True, True, False, False, True, False, (x is True, y is False, a: 5, b: 10)

#exercise 4
# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
# print(len(my_text))

# exercise 5
longestword=""
word=input("Please input the longest sentence you can without the character “A”: ")
while "A" not in word:
    if len(word) > len(longestword):
        longestword = word
        print("you broke your record, congratulations")
        word=input("Please input a longer sentence without the character “A”: ")
    else:
        word=input("That's not longer than your record, please input a longer sentence without the character “A”: ")
print("You put “A” in the answer, liar, traitor")