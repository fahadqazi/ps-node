/**
 * callbacks vs Events
 * 
 * Callback
 * 
 * getSomething('item', function(){
 *  console.log('done')
 * })
 * 
 * Events
 * 
 * var results = getSomething(param)
 * 
 * results.on('item', function(){})
 * results.on('done', function(){})
 * results.on('error', function(){})
 */