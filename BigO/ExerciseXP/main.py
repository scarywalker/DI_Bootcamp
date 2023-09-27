# Exercise 1

# from time import time

# def timer(func):

#     def wrapper(*args, **kwargs):
#         start = time()
#         func(*args, **kwargs)
#         end = time()
#         print(f"Time <{func.__name__}>: {end-start}")

#     return wrapper

# @timer
# def function1():
#     for i in range(10):
#         print(i)

# timer(function1())

# O(n)

# @timer
# def function2(n):
#     for i in range(n):
#         for j in range(n):
#             print(i, j)

# timer(function2(247))

# O(n^2)

# @timer
# def function3(n):
#     i = 1
#     while i < n:
#         i *= 2
#         print(i)

# timer(function3(247745747))

# O(1)

# Exercise 2

# numbers = [5, 2, 9, 1, 5, 6]

# def insertion_sort(numbers: list) -> None:
#    for element in range(1,len(numbers)):
#         i = element
#         while i > 0:
#             if numbers[i] < numbers[i-1]:
#                 numbers[i], numbers[i-1] = numbers[i-1], numbers[i]
#                 i += -1
#             else: 
#                 break
            

# insertion_sort(numbers) # sorts the numbers list
# print(numbers) # check that the sorting is successfull

# Exercise 3

# numbers = [1, 3, 5, 7, 9, 11]

# def binary_search(numbers: list, value: int) -> int:
#     numbers.sort()
#     low = 0
#     high = len(numbers)-1
#     mid = (low+high)//2
#     while True:
#         if low > high:
#             return(f"the value is not on the list")
#         elif numbers[mid] < value:
#             low = mid+1
#             mid = (low+high)//2
#         elif numbers[mid] > value:
#             high = mid-1
#             mid = (low+high)//2
#         else:
#             return(f"the value's index is {mid} ")        

# print(binary_search(numbers, 7))

