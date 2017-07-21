var evenDoubler = function(v, callback){
  if(v%2 === 0){
    callback(null, v*2);
  } else {
    callback(new Error ("Error right here"));
  }
};

process.on('message', function(m){
    if(m.cmd === 'double'){
        console.log('hs: I was asked to double ' + m.number);
        evenDoubler(m.number, function(err, result){
            process.send({answer: result})
        });
    } else if( m.cmd === 'done') {
        process.exit();
    }
})