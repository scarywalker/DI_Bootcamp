gime=input("Gime a string, 10 characters, no more, no less: ")
if len(gime)>10:
    print("string too long")
if len(gime)<10:
    print("string not long enough")
if len(gime)==10:
    print("perfect string")
    print(gime[0])
    print(gime[-1])
    printable = ""
    for x in gime:
        printable += x
        print(printable)