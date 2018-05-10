const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500, svgHeight = 300, barPadding = 5; // chaining variables! What?! So cool! This sets the SVG dimensions in the DOM
const barWidth = (svgWidth / dataset.length); // 55.55556


const svg = d3.select('svg')
    .attr("width", svgWidth) // 500
    .attr("height", svgHeight); // 300

const barChart = svg.selectAll("rect") // `rect` is an svg default for `rectangle`
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
