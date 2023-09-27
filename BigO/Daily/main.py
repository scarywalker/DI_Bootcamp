class Stack:

    def __init__(self):
        self.items=[]

    def push(self, data):
        self.items.append(data)

    def pop(self):
        return self.items.pop()

    def is_empty(self):
        return self.items==[]

    def peek(self):
        return self.items[-1]
    
def balancedparentheses(expression: str) -> bool:
    check = Stack()
    for element in expression:
        if element in ["(","[","{"]:
            check.push(element)
        elif element in [")","]","}"]:
            if element == ")" and check.peek() == "(":
                check.pop()
            elif element == "]" and check.peek() == "[":
                check.pop()
            elif element == "}" and check.peek() == "{":
                check.pop()
            else:
                return False
    return check.is_empty()

print(balancedparentheses("(1 + 2) * {[(3 / 4) - 5]}"))
print(balancedparentheses("[1 + 2) * (3 - 4)]"))
print(balancedparentheses("((1 + 2)"))
