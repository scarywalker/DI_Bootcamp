# exercise 1
year = 2023
month = 7
day = 20
def get_age(year, month, day):
    """call giving current date, ask for birthdate input and spits age"""
    birth = input("Gime your date of birth in a 'year,month,day' format: " ).split(",")
    age = year - int(birth[0]) - 1
    if int(birth[1]) * 100 + int(birth[2]) <= month * 100 + day:
        age += 1
    return age

def can_retire(gender):
    """checks if can retire"""
    age = get_age(year, month, day)
    return (gender == 'f' and age >= 62) or (gender == 'm' and age >= 67)

print(can_retire('f'))
