> ## Interacting with the web

### Make a web request
- using the http module
- options can be a url or an object
- 'req' returned from the request function is an instance of http.ClientRequest(a writable stream). This can be used to write/pipe for POST requests.
- 'res' is an instance of http.ClientResponse(a readable stream) and is the response of the request. This can be read from or piped to a writable stream.
- first param of callback is not 'err'
```javascript
var http = require('http');

var req = http.request('options', function(res){
    //process callback
});
```

- Here we either use the url or the object
- When the request runs and we receive a request object back, we need to end it before we use it. Closing the writable stream.
- We can also use GET instead of request which just returns the response and no writable stream.
- Native http request don't follow redirects
```javascript
var http = require('http');

var options = {
    host: 'www.google.com', 
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('making a request....');

var req = http.request('http://www.google.com', function(res){
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();
```

> ## Build a web server
- A single callback function is passed createServer and is invoke every time the server gets a request.
- If we dont' provide a callback we can still receive requests by listening for events on the server object.
- req is an instance of http.ServerRequest(readable stream). For uploads to the server it can be read from and piped to a writable stream.
- res is an instance of the http.ServerResponse(writable stream). This is the response sent to the client. Data can be piped back to the response stream.
```javascript
var http = require('http');

var server = http.createServer(function(req, res){
    //process request
});

server.listen(port, [host]);
```

### Example Server
- if the url contains '/file.txt' at the end it finds the file
- creates a read stream and pipes the response to ServerResponse stream.
- need to have 'file.txt' in the current directory.
```javascript
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.url === '/file.txt'){
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }else{
        res.end('Hello World');
    }
}).listen(8000, '127.0.0.1', () => {
    console.log('server is running')
})
```

> ## Socket.io
- provides an abstraction to maintain an active connection between browser and server.
- if socket.io is not supported it will fall back to a supported format.
- provides provides an interface on both the browser and the server.
```javascript
var http = require('http');
var socketIo = require('socket.io');
var fs = require('fs');

var handler = function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error Loading index.html')
        }else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketIo.listen(app);

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timeStamp = Date.now();
        console.log('Emitted: ', timeStamp);
        socket.emit('timer', timeStamp);
    }, 2000);
    socket.on('submit', function(data){
        console.log('Submitted: ', data);
    });
});

app.listen(8080);

console.log('server is running');
```

```html
<!DOCTYPE html>

<head>
    <title>Socket.io</title>
    <script src="./index.js"></script>
    <script type="text/javascript">
        var socket;
        function onload(){
            socket = io.connect();
            socket.on('timer', function(data){
                document.getElementById('timer').innerHTML = data;
            });
        }
        function submitData(){
            var data = document.getElementById('inputdata').value;
            socket.emit('submit', data);
        }
    </script>
</head>

<body onload="onload()">
    <h1>Sample websockets page</h1>
    <p>Timer: <span id='timer'></span></p>
    <form action="#">
        <p>Data: <input type="text" id="inputdata" />
        <input type="button" onClick="submitData()">
        </p>
    </form>
</body>
</html>
```