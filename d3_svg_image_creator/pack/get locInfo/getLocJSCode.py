import Image
import math
import sys

#mainbord___2___170.41130559056452___58.16470860463673___3.024954971042936____
fileName = "locInfo.txt"

f = open(fileName, 'r')
s = f.read()
jsonStr = [];
arrayStr = [];
for cate in s.split("____"):
    items = cate.split("___")
    items[0] = '"' + items[0] + '"'
    jsonStr.append(items[0] + ': {zoom: ' + items[1] + ', x: ' + items[2] + ', y: ' + items[3] + "}")
    arrayStr.append("[" + ", ".join(items) + "]")

jsonStr = ",\n".join(jsonStr)
arrayStr = ",\n".join(arrayStr)
f.close()
fo1 = open("jsonStr.txt", "w")
fo1.write("{" + jsonStr + "}")
fo1.close()
fo2 = open("attayStr.txt", "w")
fo2.write("[" + arrayStr + "]")
fo2.close()

