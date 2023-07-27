import random

class Game:

    def get_user_item(self):
        user_item = None
        while user_item not in ["rock","paper","scissors"]:
            user_item = input("Select an item (rock/paper/scissors): ")
        return user_item

    def get_computer_item(self):
        computer_item = random.choice(["rock","paper","scissors"])
        return computer_item
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (computer_item == "rock" and user_item == "paper") or \
             (computer_item == "paper" and user_item == "scissors") or \
             (computer_item == "scissors" and user_item == "rock"):
            return "win"
        else:        
            return "loss"
                
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"player: {user_item}\ncomputer: {computer_item}\n{result}")
        return result

