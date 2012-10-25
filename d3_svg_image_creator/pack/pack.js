var w = 1024,
    h = 1024,
    format = d3.format(",d");

var pack = d3.layout.pack()
    .size([w - 4, h - 4])
    .value(function(d) { return d.size; });

var vis = d3.select("#chart").append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "pack")
  .append("g")
    .attr("transform", "translate(2, 2)");

d3.json("category_ratio.json", function(json) {
  var node = vis.data([json]).selectAll("g.node")
      .data(pack.nodes)
    .enter().append("g")
      //.attr("class", function(d) {return d.children ? "node" : "leaf node"; })
      .attr("fill", function(d) { return d.children ? "rgb(31, 119, 180)" : "#ff7f0e"; })
      .attr("fill-opacity", function(d) { return d.children ? .25 : 1; })
      .attr("stroke", "rgb(31, 119, 180)")
      .attr("stroke-width", "1px")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

      /*
  node.append("title")
      .text(function(d) { return d.name + (d.children ? "" : ": " + format(d.size)); });
      */

  node.append("circle")
      .attr("r", function(d) { return d.r; });

  var locStr = "";
  node.filter(function(d) { return !d.children; }).append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .attr("font-size", "10px")
      .attr("font-family", "san-serif")
      .attr("fill", "black")
      .attr("stroke", "none")
      .text(function(d) {
              var level = 2;
              while (d.r / 6 * (level - 1) < d.name.length && level < 6) {
                level += 1;
              }
              //if (d.r / 6 >= d.name.length) {
               // console.log( d.name + "___" + level + "___" + (d.x * Math.pow(2, level - 2))+ "___" + (d.y * Math.pow(2, level -2)) + "___" + d.x + "___" + d.y + "____");
               // locStr += (d.name + "___" + level + "___" + (d.x * Math.pow(2, level - 2))+ "___" + (d.y * Math.pow(2, level -2)) + "___" + d.x + "___" + d.y + "____");
              //}"

              locStr += (d.name + "___"
                  + level + "___"
                  + (d.x / 1020 * 256) + "___"
                  + (d.y / 1020 * 256) + "___"
                  + (d.r / 1020 * 256) + "____"); //not 1024, but 1020
              return d.name.substring(0, d.r / 6);
            });
    //!!!!!!!! warning: translate(2, 2) must be removed! Or the ratio won't be exactly 2.
    console.log(locStr);
});
