#instrução continue metódo for

for i in range(0,6):
    if i == 3:
        continue
    print(i)

#Metódo while
q = 1
while q <= 10:
    if q == 3:
        q+= 1
        continue
    print(q)
    q +=1

  
  
  
    #Loop dentro de outro loop

    for f in range(1,3):
        print(f)
        for letter in ["a","b","c"]:
            print(letter)


    #iterando duas listas

    list1 = [1,2,3,4]

    list2 = [5,6,7,8]

    added = []

    for i in list1:
        for j in list2:
            added.append(i+j)
            print(added)