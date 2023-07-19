matrix_original = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""
matrix = ""
for x in range(0,len(matrix_original),4):
    matrix += matrix_original[x]
for x in range(1,len(matrix_original),4):
    matrix += matrix_original[x]
for x in range(2,len(matrix_original),4):
    matrix += matrix_original[x]
print(matrix)

answer = ""
for x in range(0,len(matrix)):
    print(matrix[x],x)
    if matrix[x].isalpha():
        answer += matrix[x]
    else:
        if matrix[x-1].isalpha() and not matrix[x].isalpha():
            answer += " "
print(answer)