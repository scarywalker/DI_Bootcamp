from game import Game

def get_user_menu_choice(): # I don't know of what Exactely you mean by data validation, so I made all that is not one of the command strings mean quit
    a = input(f"Play a new game: p\nShow scores: s\nQuit: q\n-> ")
    return a
    
def print_results(results):
    print(f"You won {results['win']} times\nYou lost {results['loss']} times\nYou drew {results['draw']} times")

def main():
    results = {'win':0,'loss':0,'draw':0}
    while True:
        choice = get_user_menu_choice()
        if choice == 's':
            print_results(results)
        elif choice == 'p':
            g = Game()
            result = g.play()
            results[result] += 1
        elif choice == 'q':
            print("Goodbye")
            break
        else:
            print("invalid input")
            continue

if __name__ == "__main__":
    main()