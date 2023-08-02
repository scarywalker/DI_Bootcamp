import menu_item as m

def show_user_menu():
    print("welcome")
    print("View an Item (V)")
    print("Add an Item (A)")
    print("Delete an Item (D)")
    print("Update an Item (U)")
    print("Show the Menu (S)")
    print("Exit (E)")
    answer = input(': ')
    if answer.upper() == "V":
        print(m.MenuManager.get_by_name())
        show_user_menu()
    elif answer.upper() == "A":
        print(m.MenuItem.save())
        show_user_menu()
    elif answer.upper() == "D":
        print(m.MenuItem.delete())
        show_user_menu()
    elif answer.upper() == "U":
        print(m.MenuItem.update())
        show_user_menu()
    elif answer.upper() == "V":
        print(m.MenuManager.get_by_name())
        show_user_menu()
    elif answer.upper() == "S":
        print(m.MenuManager.all_items())
        show_user_menu()
    elif answer.upper() == "E": 
        return m.MenuManager.all_items()


show_user_menu()