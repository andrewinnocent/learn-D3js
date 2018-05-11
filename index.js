// D3 Axes methods:
    // d3.axisTop()
    // d3.axisRight()
    // d3.axisBottom()
    // d3.axisLeft()

var data= [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300;

// define the SVG container
var svg = d3.select('svg')
   .attr("width", svgWidth)
   .attr("height", svgHeight);

// create the scale to use for the axis
var xScale = d3.scaleLinear()
   .domain([0, d3.max(data)])
   .range([0, svgWidth]);

var yScale = d3.scaleLinear()
   .domain([0, d3.max(data)])
   .range([svgHeight, 0]);

var xAxis = d3.axisBottom()
    .scale(xScale);

typeof(xAxis); // It's a function, therefore it needs to be called.

var yAxis = d3.axisLeft()
    .scale(yScale);

svg.append("g") // <g> is `group` element for SVG. It will hold all the elements the called function will produce.
   .attr("transform", "translate(50, 10)")
   .call(yAxis); // call (or invoke) the function

var xAxisTranslate = svgHeight - 20;

svg.append("g")
   .attr("transform", "translate(50, " + xAxisTranslate  +")")
   .call(xAxis);
