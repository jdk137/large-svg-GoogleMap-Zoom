import Image
import math
import sys

if len(sys.argv) < 4:
    print 'format: split.py [input_chart_path] [output_chart_path] chart1 chart2 ...\n\
        for example: split.py ./ ./tiles/ chart1.png chart2.png'

for fileName in sys.argv[3: ]:
    tilePath = sys.argv[2] + "/"
    #fileName = sys.argv[3] #"chart_2.png"
    fileNAME = fileName[0: fileName.rfind(".")]
    suffix = fileName[fileName.rfind("."): ]
    TILESIZE = 256
    im = Image.open(fileName)
    width = im.size[0]
    height = im.size[1]
    
    for i in range(int(math.ceil(float(width)/TILESIZE))):
        for j in range(int(math.ceil(float(height)/TILESIZE))):
            #print tilePath + fileNAME + "_" + str(i) + "_" + str(j) + suffix
            box = (TILESIZE * i, TILESIZE * j, TILESIZE * (i + 1), TILESIZE * (j + 1))
            sim = im.crop(box)
            sim.save(tilePath + fileNAME + "_" + str(i) + "_" + str(j) + suffix)

