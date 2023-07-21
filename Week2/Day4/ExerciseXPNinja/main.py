# exercise 1
# def get_full_name(first_name="name", middle_name="nothing", last_name="surname"):
#     """prints name, middle name if it exists, and the last name"""
#     if middle_name != "nothing":
#         print(f"{first_name} {middle_name} {last_name}")
#     else:
#         print(f"{first_name} {last_name}")

# get_full_name()

# exercise 2
# too anoying too search for the morse code

# exercise 3
# def box_printer(*args):
#     """Takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame."""
#     longest_string = 0
#     for string in args:
#         if longest_string < len(string) : longest_string = len(string)
#     print('*'*(longest_string + 4))
#     for string in args: print(f"* {string}{' '*(longest_string - len(string))} *")
#     print('*'*(longest_string + 4))
        
# box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

# exercise 4
# def insertion_sort(alist):
# """the exact same thing as the .sort method"""
#    for index in range(1,len(alist)):

#      currentvalue = alist[index]
#      position = index

#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1

#      alist[position]=currentvalue

# alist = [54,26,93,17,77,31,44,55,20]
# insertion_sort(alist)
# print(alist)