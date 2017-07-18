/**
 * callbacks vs Events
 * 
 * Callback - Request/Reply 
 * You make a request and set a function to be called when request completes
 * One request one reply
 * No result until you get all the result
 * callback function wates for all items to arrived before running
 * getThem function is accumulating and storing everything along the way
 * All or nothing proposition
 * 
 * getSomething('item', function(){
 *  console.log('done')
 * })
 * 
 * Events - Publish/Subscribe
 * 'on' function can be invoked repeatedly 
 * function associated with an event run when that event is triggered
 * Not accumulating items in memory
 * 
 * var results = getSomething(param)
 * 
 * results.on('item', function(){})
 * results.on('done', function(){})
 * results.on('error', function(){})
 */

 /** 
 The Publisher                            The Subscriber
 emitter.emit(event, [args]) --->         emitter.on(event, listener)
 
 


 */