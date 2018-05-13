var svgWidth = 600, svgHeight = 500;

var svg = d3.select("svg")
   .attr("width", svgWidth)
   .attr("height", svgHeight)
   .attr("class", "svg-container")

var line = svg.append("line")
   .attr("x1", 100) // starting position from left of the svg container
   .attr("y1", 50) // starting position from top of the svg container
   .attr("x2", 500) // ending position from left of the svg container
   .attr("y2", 75) // ending position from top of the svg container
   .attr("stroke", "red") // stroke attribute is required for the line to be visible
   .attr("stroke-width", 5); // in pixels

var rect = svg.append("rect")
   .attr("x", 200) // starting position from left of the svg container
   .attr("y", 100) // starting position from top of the svg container
   .attr("width", 200)
   .attr("height", 100)
   .attr("fill", "#9B95FF");

var circle = svg.append("circle")
   .attr("cx", 200) // position is from the center of the circle
   .attr("cy", 300) // position is from the center of the circle
   .attr("r", 80) // `r` is `radius` - starting from the center to the border of the circle
   .attr("fill", "#7CE8D5");
