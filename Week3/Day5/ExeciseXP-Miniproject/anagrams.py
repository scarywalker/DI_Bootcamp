from anagram_checker import AnagramChecker

def menu():
    ac = AnagramChecker()
    while True:
        word = input("input a word or exit by inputing e: ").strip()
        if word == 'e':
            print("goodbye, JOJO")
            break
        else:
            if ac.is_valid_word(word):
                print("YOUR WORD :'MEAT''")
                print("this is a valid English word.")
                print(f"Anagrams for your word: {ac.get_anagrams(word)}")
                
menu()

    