# exercise 1
# def display_message():
#     """prints: Everyone, I am learning Python in this course."""
#     print("Everyone, I am learning Python in this course.")

# display_message()

# exercise 2
# def favorite_book(title):
#     """print a message, such as: One of my favorite books is <title>"""
#     print(f"One of my favorite books is {title}")
# favorite_book('Alice in Wonderland')

# exercise 3
# def describe_city(city,country="Brasil"):
#     """prints <city> is in <country>"""
#     print(f"{city} is in {country}")
# describe_city('Rio')

# exercise 4
# import random
# def ramdomgame(num):
#     """accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers."""
#     x = random.randint(1,100)
#     if num == x:
#         print("Winner")
#     else:
#         print(f"Loser, should have chosen {x} instead of {num}")
# ramdomgame(int(input("Gime a number between 1 and 100: ")))

# exercise 5
# def make_shirt(size='Large',text='I love Python'):
#     """print a sentence summarizing the size of the shirt and the message printed on it"""
#     return print(f"The size of the shirt is {size} and the text is {text}")
# make_shirt()
# make_shirt('Medium')
# make_shirt('Small','I Hate Python')

# exercise 6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# great_names = []
# def show_magicians(names):
#     """prints the name of each magician in the list"""
#     for name in names:
#         print(name)
# def make_great(names):
#     """modifies the list of magicians by adding the phrase 'the Great' to each magician's name"""
#     for name in names:
#         name += " The Great"
#         great_names.append(name)
#     return great_names
# make_great(magician_names)
# show_magicians(great_names)

# exercise 7
# import random
# def get_random_temp(season):
#     """creates random temperature"""
#     if season == 'winter':
#         return random.randint(-10,16)
#     if season == 'spring':
#         return random.randint(0,32)
#     if season == 'summer':
#         return random.randint(23,40)
#     if season == 'fall':
#         return random.randint(0,32)

# def main():
#     """Inform the user of the temperature in a friendly message"""
#     temp = get_random_temp(input("Gime a season( 'winter', 'spring', 'summer', 'fall'): "))
#     if temp < 0:
#         print(f"The temperature right now is {temp} degrees Celsius.\nBrrr, that's freezing! Wear some extra layers today")
#     elif temp < 16:
#         print(f"The temperature right now is {temp} degrees Celsius.\nQuite chilly! Don't forget your coat")
#     elif temp < 23:
#         print(f"The temperature right now is {temp} degrees Celsius.\nPerfect")
#     elif temp < 32:
#         print(f"The temperature right now is {temp} degrees Celsius.\nQuite hot! Don't forget to remove your coat")
#     else:
#         print(f"The temperature right now is {temp} degrees Celsius.\nHell is upon us")
# main()

# exercise 5
data = [{"question": "What is Baby Yoda's real name?", "answer": "Grogu"}, {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"}, { "question": "What year did the first Star Wars movie come out?", "answer": "1977"}, {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"}, {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"}, {"question": "What species is Chewbacca?", "answer": "Wookiee"}]
correct = 0
incorrect = 0
incorrect_list = []
def questions(qlist):
    """asks the questions to the user, and check his answers"""
    global correct
    global incorrect
    global incorrect_list
    for item in qlist:
        answer = input(item.get("question"))
        if item.get("answer") == answer:
            correct += 1
        else:
            incorrect += 1
            incorrect_list.append(answer)
questions(data)
def inform_user(correct,incorrect):
    """ informs the user of his number of correct/incorrect answers."""
    print(f"You have gotten {correct} correct answers and {incorrect} incorrect ones")
inform_user(correct,incorrect)