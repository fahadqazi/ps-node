var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ax']);   //get list of processes
var grep = spawn('grep', ['node']);     //look for the phrase node

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function(data){
    console.log('ps stderr: ' + data);
});

grep.stderr.on('data', function(data){
    console.log('grep stderr: ', + data);
});