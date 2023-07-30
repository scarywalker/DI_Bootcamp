# exercise 1

# Class: A blueprint for creating objects with attributes and methods.

# Instance: An individual object created from a class.

# Encapsulation: Binding data and methods that operate on the data into a single unit (class) while hiding internal details.

# Abstraction: Simplifying complex systems by breaking them into smaller, manageable units using classes and objects.

# Inheritance: Allowing a class (subclass) to inherit attributes and methods from another class (superclass).

# Multiple Inheritance: Allowing a class to inherit from more than one superclass.

# Polymorphism: The ability of different classes to be treated as objects of a common superclass.

# Method Resolution Order (MRO): The order in which Python searches for methods in a class hierarchy during method invocation.

# exercise 2

import random

class Card:
    def __init__(self,value:str,suit:str) -> None:
        self.value = value
        self.suit = suit

class Deck:
    def __init__(self) -> None:
        self.deck = []
        for suit in ['hearts', 'diamonds', 'clubs', 'spades']:
            for value in ['a','2','3','4','5','6','7','8','9','10','j','q','k']:
                self.deck.append(Card(value,suit))

    def shuffle(self):
        random.shuffle(self.deck)

    def draw(self): 
        return self.deck.pop()
