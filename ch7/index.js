var cluster = require('cluster');
var http = require('http');
var numWorkers = 2;

if (cluster.isMaster){
    //Fork workers
    for(var i = 0; i<numWorkers; i++){
        console.log('master: about to fork a worker');
        cluster.fork();
    }

    cluster.on('fork', function(worker){
        console.log('master: fork event (worker: ' + worker.id + ')');
    });

    cluster.on('online', function(worker){
        console.log('master: online event (worker: ' + worker.id + ')');
    });

    cluster.on('listening', function(worker, address){
        console.log('master: listening event (worker: ' + worker.id + ', pid' + ' '+ worker.process.id + ' ' + address.address);
    });

    cluster.on('exit', function(worker, code, signal){
        console.log('master: exit event (worker: ' + worker.id + ')');
    });
}else {
    console.log('worker: ' + cluster.worker.id + ' id ready');

    var count = 0;

    http.createServer(function(req, res){
        res.writeHead(200);
        count++;
        console.log('working number: ' + cluster.worker.id + ' is incrementing count to ' + count++);
        res.end('hello world from worker number: ' +  cluster.worker.id + ' pid ' + cluster.worker.process.id + ' and the count: ' + count )
        if (count === 3){
            cluster.worker.destroy();
        }
    }).listen(8080);
}