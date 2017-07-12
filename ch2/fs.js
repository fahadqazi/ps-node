var mathFun = require('./mathfun');

var processResult = function(err, result, time){
  if(err){
    console.log("Error: ", err.message);
  }else{
    console.log("Results: " + result + " " + time);
  }
};

for (var i = 0; i<10; i++){
  console.log('calling evenDoubler with param: ', i);
  mathFun.evenDoubler(i, processResult);
}

console.log('---------');

console.log('The foo variable: ', mathFun.foo);
