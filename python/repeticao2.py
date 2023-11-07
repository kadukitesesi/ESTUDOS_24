list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
added = []
for i in list1:
    for j in list2:
        added.append(i + j)


print(added)


while input("C- para continuar ou P-para parar  ") != "P":
    for i in range(1,7):
        print(i)