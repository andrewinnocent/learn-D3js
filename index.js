const dataset = [1, 2, 3, 4, 5];

d3.select('body') // parent
    .selectAll('p') // child
    .data(dataset) // loads the data for further processing; the data is bound to the `p` selection.
    .enter() // "each element in the data array is paired with the corresponding node in the selection. If there are fewer nodes than data, the extra data elements form the enter selection, which you can instantiate by appending to the enter selection."
    .append('p') // appends paragraph for each data element
    // .text('D3 is awesome!!');
    .text(function(d) { return `I\'m data number: ${d}`; }); // specified the text for each `p` appended
