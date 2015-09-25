// Load the node fs (filesystem) module.

var fs = require('fs');
var _ = require('lodash');

// Read the contents of the file into memory.

fs.readFile('example_log.txt', function (err, logData) {

    // If an error occurred, throwing it will display the exception and kill our app.

    if(err) {

        throw err;

    } 

    // logData is a Buffer, convert to string and store in var 'text'.

    var text = logData.toString();

    //Construct an empty object and store it in the 'results' var

    var results = {};

    // Break up the file into lines.

    var lines = text.split('\n');

    console.log(_.isArray(lines));

    // Call forEach method 

    lines.forEach(function(line) {

        var parts = line.split(' ');
        var letter = parts[1];
        var count = parseInt(parts[2]);

        if(!results[letter]) {

            results[letter] = 0;

        }

        results[letter] += parseInt(count);

    });

    //console.log(results);

});