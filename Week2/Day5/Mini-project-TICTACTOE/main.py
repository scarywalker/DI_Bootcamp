# print("Welcome to TIC TAC TOE!")
# x = "TIC TAC TOE\n***************\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n***************"
# print(x)
# for a in range(0,len(x)):
#     print(x[a],a)
table = [[" "," "," "],[" "," "," "],[" "," "," "]]
def checkwin():
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
    print(table[0])
    print(table[1])
    print(table[2])
    x = int(input("player 1, row please: ")) - 1
    y = int(input("player 1, column please: ")) - 1
    if table[x][y] != " ":
        print("invalid coordinates, try again")
        player1()
    else:
        table[x][y] = "X"
    if checkwin() == True:
        print("Player 1 Wins")
    else:
        player2()

def player2():
    print(table[0])
    print(table[1])
    print(table[2])
    x = int(input("player 2, row please: ")) - 1
    y = int(input("player 2, column please: ")) - 1
    if table[x][y] != " ":
        print("invalid coordinates, try again")
        player2()
    else:
        table[x][y] = "O"
    if checkwin() == True:
        print("Player 2 Wins")
    else:
        player1()

player1()
print(table[0])
print(table[1])
print(table[2])