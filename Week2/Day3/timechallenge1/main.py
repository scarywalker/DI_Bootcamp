sentence = input("Gime a sentence: ").split()
reverse_sentence = ""
for word in reversed(list(range(len(sentence)))):
    reverse_sentence += sentence[word] + " "
print(reverse_sentence)
