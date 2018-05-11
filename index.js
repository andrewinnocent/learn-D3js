// Using `var` because D3 docs say: Since method chaining can only be used to descend into the document hierarchy, use var to keep references to selections and go back up.
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5; // chaining variables! What?! So cool! This sets the SVG dimensions in the DOM
var barWidth = (svgWidth / dataset.length); // 55.55556


var svg = d3.select('svg')
    .attr("width", svgWidth) // 500
    .attr("height", svgHeight); // 300

var barChart = svg.selectAll("rect") // `rect` is an svg default for `rectangle`
    .data(dataset) // loads data
    .enter() // prepared each datum for further action
    .append("rect") // each datum is bound to a `rect`
    .attr("y", function(d) {
         return svgHeight - d
    }) // each `rect`'s attr.
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding) // 50.5556
    .attr("transform", function (d, i) { //
        const translate = [barWidth * i, 0]; // barWidth * index, height below x axis
        return "translate("+ translate +")"; // this allows each bar to begin relative to the previous bar instead of being stacked upon each other.
    });

// Creating Labels
var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d; // .text() can take a string or a function.
    })
    .attr("y", function(d, i) { // removing `i` (index) from the parameter doesn't affect the chart. It's also not being returned, so why have it?
        return svgHeight - d - 2; // 2px in order for the text to have spacing above the chart
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");
