text = input("Gime the text: ")
op = input("d for decrypt and e for encrypt: ")
if op == "d" :
    cypher_text = ""
    for letter in text:
        cypher_text += chr(ord(letter) + 3)
    print(cypher_text)
elif op == "e" :
    decypher_text = ""
    for letter in text:
        decypher_text += chr(ord(letter) - 3)
    print(decypher_text)
else:
    print("invalid operation")