/** Callback pattern
* callback is called on every condidtion
* callback returns null as first param if it returns value
*/
var maxTime = 1000;

var evenDoubler = function(v, callback){
  if(v%2 === 0){
    callback(null, v*2);
  } else {
    callback(new Error ("Error right here"));
  }
}

var handleResults = function(err, result){
  if(err){
    console.log("Error: ", err.message)
  }else{
    console.log("Result: ", result);
  }
}

evenDoubler(2, handleResults);
