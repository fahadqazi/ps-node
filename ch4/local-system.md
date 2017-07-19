## The Process Object
___
- provides a way for node app to manage it's own process and other processes on the system
- process object is an instance of the EventEmitter class


### Process Streams
- stream starts paused we we need to resume it.
```javascript
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('Data -> ' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});
```
### Process Events
- If one process it running and you try to kill the process from outside, it will trigger the SIGTERM event.
- command to kill process: __kill -TERM #__
```javascript
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('Data ->' + chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function(){
    process.stderr.write('what are you trying to terminate the process?');
});

console.log('Node is running this process: ' + process.pid);
```