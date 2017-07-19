> ## The Process Object
---
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

> ## File System - FS Module
---
- contains sync, async and stream functions
- watch function to event to watch a file for changes and use Event Emitter to emit change event.

### Synchronous function
- Sync functions with no callbacks.
```javascript
var fs = require('fs');

if (fs.existsSync('temp')){
    console.log('Directory already exists, removing...')
    if (fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
    process.chdir('temp')
    fs.writeFileSync('test.txt', 'This is some test text');
    fs.renameSync('test.txt', 'new.txt');
    console.log('File size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}
```

### Asynchronous function
```javascript
var fs = require('fs');

if (fs.existsSync('temp')){
    console.log('Directory already exists, removing...')
    if (fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err){
    fs.exists('temp', function(exists){
        if (exists){
            process.chdir('temp');
            fs.writeFile('test.txt', 'This is some testing text', function(err){
                fs.rename('test.txt', 'new.txt', function(err){
                    fs.stat('new.txt', function(err, stats){
                        console.log('File has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function(err, data){
                            console.log('File contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    });
});
```

> ## Buffer Object 
- In the above example we use 'data.toString()'
- fs.readFileSync('text.txt') does not return a string object it returns a buffer 
- This is because javascript has difficulty processing binary data.
- Buffer class provides memory allocation to deal with this issue directly.
- Buffers can be converted to and from, using encoding (utf8, ascii, binary ...)
```javascript
var b = new Buffer('Hello');

console.log(b.toString());

console.log(b.toString('base64'));

var v = new Buffer('World').toString('base64');

console.log(b.toString('utf8', 0, 2));
```

> ## OS Module
- Provides information about the current operating system.