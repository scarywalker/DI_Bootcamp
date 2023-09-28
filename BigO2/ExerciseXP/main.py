# Exercise 1

# from collections import deque

# schedule = deque()

# def changeschedule():
#     entry = input("press 'a' to add task, 'e' to execute next task, 'c' to show task queue and z to exit:\n")
#     if entry == "a":
#         description = input("please ad a description( text) for your new task: ")
#         priority = input("please ad a priority( number) for your new task: ")
#         schedule.appendleft((description,priority))
#     elif entry == "e":
#         if len(schedule) > 0:
#             print(f"executed :{schedule[-1]}")
#             schedule.pop()
#         else: 
#             print('schedule empty')
#     elif entry == "c":
#         print(f"current tasklist: {schedule}")
#     elif entry == "z":
#         return print("goodbye")
#     else:
#         print("invalid input")
#     changeschedule()

# changeschedule()

# Exercise 2

# from collections import deque

# def check_palindrome(word:str) -> bool:
#     standard = word.lower().replace(" ","")
#     reverse = deque()
#     for letter in standard:
#         reverse.appendleft(letter)
#     for index in range(len(standard)):
#         if reverse[index] == standard[index]:
#             pass
#         else:
#             return False
#     return True

# print(check_palindrome("Racecar"))
# print(check_palindrome("hello"))
# print(check_palindrome("A but tuba"))
# print(check_palindrome("Able was I ere I saw Elba"))
# print(check_palindrome("vfgvsjbfleasbjlgebsgjrweaogn"))

# Exercise 3

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        node = Node(value)
        if self.head == None:
            self.head = node
        else:
            current_node = self.head
            while current_node.next != None:
                current_node = current_node.next
            current_node.next = node
            
a = LinkedList

a.append(a,"532")
a.append("gds")
a.append("kyk")
a.append("55")

print(a.head)
print(a.head.next)
print(a.head.next.next)
print(a.head.next.next.next)
print(a.head.next.next.next.next)