var request = require('request');

request('http://google.com/', function(err, response, body){
  if(err){
    console.log(err);
  }
  if (!err && response.stateCode === 200){
    console.log(body);
    // console.dir(response);
  }
});
