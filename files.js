const fs = require('fs');

// var readStream = fs.createReadStream('files.js');
// readStream.pipe(process.stdout);

var writeStream = fs.createWriteStream('fib.txt');

var fib = require('./fib');

fib.pipe(writeStream);