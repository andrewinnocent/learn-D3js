// Scales - functions that transform data by increasing/decreasing for better visualization

// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = [1, 2, 3, 4, 5]; // with this dataset, the chart is barely visible. Using scales functions will fix that problem.

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// Scale
var yScale = d3.scaleLinear() // good default scale for quantitative data as it keeps proportional variances.
    .domain([0, d3.max(dataset)]) // defines the interval (0...maxNumberInDataset)
    .range([0, svgHeight]); // transforms the domain interval into a new interval (0...300) to fit within the specified container dimensions

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - yScale(d) // transformed y size
    })
    .attr("height", function(d) {
        return yScale(d); // transformed height
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
