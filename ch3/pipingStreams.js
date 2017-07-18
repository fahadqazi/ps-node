//example 1

// var request = require('request');

// var s = request('http://www.pluralsight.com');

// s.pipe(process.stdout)
//this will get the whole stream and dump it on the console.

//example 2
// var request = require('request');

// request('http://www.pluralsight.com').pipe(process.stdout);
//same as above

// example 3

// var request = require('request');
// var fs = require('fs');

// request('http://www.pluralsight.com').pipe(fs.createWriteStream('pluralSight.html'));

/**
1. Create writeable stream and store contents in the said file.
2. fs.createWriteStream('writeableStream.html') <-- returns a stream, so its passed to pipe function
3. Request the web site and Pipe it to the stream returned by createWriteStream.
 */

 // example 4

var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

request('http://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralSight.html.gz'));

/**
1. Here zlib returns a stream that is both both read and write. 
2. Read in uncompressed content and write compressed content
3. Request -> Gzip -> File
4.  
 */