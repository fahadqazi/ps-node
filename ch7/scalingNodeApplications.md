> ## Scaling Node Applications

### Child processes - "child_process"
- node applications don't handle cpu tasks well.
- spending too much cpu time on any one task in a noe app will block the event loop. This will prevent other work from being done. 
- a cpu intensive task can be passed on to a child process and the cpu can continue processing events.
- Four way to launch a child process:
    * spawn(command, [args], [options])
    * exec(command, [options], callback)
    * execFile(file, [args], [options], callback)
    * fork(modulePath, [args], [options])

#### fork()'ing
```javascript
//parent.js
var cp = require('child_process');
var n = cp.fork(__dirname + '/child.js');

n.on('message', function(m){
    console.log('Parent got message: ', m)
});

n.send({ hello: 'world'});
------------------------------------------------
//child.js
process.on('message', function(m){
    console.log('child got message', m)
});
process.send({ foo: 'bar' })
```