# exercise 1
cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
cars = cars.split(",")
cars.sort(reverse=True)
print(f"There are {len(cars)} Companies, they are: {cars}")
i = 0
o = 0
for company in cars:
    if "i" in company.lower():
        i += 1
    if "o" in company.lower():
        o += 1
print(i,o)