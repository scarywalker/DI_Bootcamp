print("Welcome to TIC TAC TOE!")
displaygraphic = "TIC TAC TOE\n***************\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n***************" 
table = [[" "," "," "],[" "," "," "],[" "," "," "]]

def checkwin():
    """checks if the current player won"""
    if table[0][0] == table[1][1] and table[0][0] == table[2][2] and table[0][0] != " ":
        return True
    elif table[2][0] == table[1][1] and table[2][0] == table[0][2] and table[2][0] != " ":
        return True
    else:
        for a in range(0,3):            
            if table[a][0] == table[a][1] and table[a][0] == table[a][2] and table[a][0] != " ":
                return True
            elif table[0][a] == table[1][a] and table[0][a] == table[2][a] and table[0][a] != " ":
                return True
            else:
                return False

def player1():
    """all operations that happen in player1 turn"""
    global displaygraphic
    print(displaygraphic)
    x = int(input("player 1, row please: "))
    y = int(input("player 1, column please: "))
    display_index = x * 32 - 5 + y * 4
    if table[x-1][y-1] != " ":
        print("invalid coordinates, try again")
        player1()
    else:
        table[x-1][y-1] = "X"
        displaygraphic = displaygraphic[0 : display_index] + "X" + displaygraphic[display_index + 1 : -1]
    if checkwin() == True:
        print("Player 1 Wins")
    else:
        player2()

def player2():
    """all operations that happen in player2 turn"""
    global displaygraphic
    print(displaygraphic)
    x = int(input("player 2, row please: "))
    y = int(input("player 2, column please: "))
    display_index = (x * 32 - 5) + (y * 4)
    if table[x-1][y-1] != " ":
        print("invalid coordinates, try again")
        player2()
    else:
        table[x-1][y-1] = "O"
        displaygraphic = displaygraphic[0 : display_index] + "O" + displaygraphic[display_index + 1 : -1]
    if checkwin() == True:
        print("Player 2 Wins")
    else:
        player1()

player1()