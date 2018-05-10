// All D3 code is written here (it is a js library after all...)
// Similar methods to jQuery

d3.select(); // returns the first element matching the specified criteria
d3.selectAll(); // returns all elements matching the specified criteria

d3.select('h1').style('color', 'red') // finds the first `h1` and styles it `red`
.attr('class', 'heading') // add a `class` attribute to h1 named `heading`
.text('Updated h1 tag'); // sets the `h1` text to `Updated h1 tag`
// this is a method chain

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', '#0000FF');
