use google map to present big image, expecially svg.
=================

[demo](http://datavlab.org/tmp/googleMapZoom)

bacause the images are so big, so I can only upload some scripts. You can download all files [here](https://docs.google.com/open?id=0B6Wtwb29rmDmMWF6NGFqM2x3T1k).

![image1](https://raw.githubusercontent.com/jdk137/large-svg-GoogleMap-Zoom/master/image1.png)

![image2](https://raw.githubusercontent.com/jdk137/large-svg-GoogleMap-Zoom/master/image2.png)

4 steps:
-----

  1. set google map. get demo.
    Reference:  
    1. [http://internet-map.net/](http://internet-map.net/).
    2. the most useful docs I viewed: [Using the Google Maps API to zoom photographs](http://forevermore.net/articles/photo-zoom/)
  2. get svg image. I use d3 to create big svg image in defferent size, 1024 * 1024, 2048 * 2048, ......., 16384 * 16384. Please view demoes in d3-svg-image-creator. I download the html file, and extract svg dom, then replace the svg head, so I get the svg images. 
  3. convert svg to png. I use linux tool rsvg which is introduced by [this script](http://grittyscripts.blogspot.com/2008/07/svg-to-png-i-wrote-this-little-helper.html). rsvg can support image larger than 20000 * 20000,  30000 * 30000 maybe impossible.
  4. split big png to tile. I wrote python script split.py to divide big png into 256 * 256 tile png. Big image's name should be xxxx_2.png or xxx_3.png, the number in the name mean the zoom level. The output image would be xxx_2_0_1.png. Here 0  and 1 means the tile is on the first row and second column  in the tile matrix. 

```
    //split.py usage
    format: split.py [input_chart_path] [output_chart_path] chart1 chart2 ...
    for example: split.py ./ ./tiles/ chart1.png chart2.png
```


update: search and click interactive added.

todo: 
  1. 做成传入一张大图， 自动压缩、分割的应用。
  2. 现有demo可视化效果优化，改进布局算法。
  3. 超过30000像素svg的转化。
  4. node.js做后端生成svg, 串联整个过程。

