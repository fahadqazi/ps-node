// An object that extends the event emitter class
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Resource = function(m){
    var self = this;
    var maxEvents = m;

    process.nextTick(function(){
        var count = 0;
        self.emit('start');
        var t = setInterval(function(){
            self.emit('data', ++count);
            if(count === maxEvents){
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
}

util.inherits(Resource, EventEmitter);

var r = new Resource(7);

r.on('start', function(){
    console.log('I am start now');
});

r.on('data', function(d){
    console.log('I am receiving this: ', d);
});

r.on('end', function(t){
    console.log('Game over after: '+ t + ' times.');
});