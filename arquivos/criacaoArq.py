import os
import csv

os.path.join(   "User" ,"st.txt")

st = open("st.txt","w")
st.write("Bem vindo ao Python!!")
st.close()

with open("st.txt","w") as st:
    st.write(input="Me diga algo pra anexar ao arquivo: ")


with open("st.csv","w",newline = '') as f:
    w = csv.writer(f,
                   delimiter = ",")
    w.writerow(["um","dois","tres"])

    w.writerow(["quatro","cinco","seis"])