// in this example request is a 3rd part module
// request extends the EventEmitter hence the 'on' and 'error' are available on it.

var request = require('request');

var s = request('http://www.pluralsight.com');

s.on('data', function(chunk){
    console.log('>>>Data ' + chunk)
});

s.on('error', function(){
    console.log('>>>Done');
});

/**
In this case variable s stores the result of the request - which
gets the html body of the pluralsight webpage.
It then receives it in chunks and logs those chunks to the console
as and which it receives it. 

 */