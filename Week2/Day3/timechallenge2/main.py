number = int(input("Gime a number: "))
divisor_list = []
for num in range(1,int(number / 2 + 1)):
    if number % num == 0:
        divisor_list.append(num)
print(sum(divisor_list) == number)