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
 
 - Event can be a string
 - Event can emit zero or more args
 
Patterns for Events: 
1. As a return value from a function. (instance of event emitter is created and return from function)
2. An Object extends EventEmitter to emit events. (still had other functionality)


Building on the concept of Event Emitter is something called Streams

- A stream extends EventEmitter class and provides an agreed upon interface.
- This provides an abstraction for data-flow: 
    * Network
    * File I/O
    * stdin/out/stderr
    * ......

- Each Stream is either:
    * readable stream
    * writeable stream
    * or both....


Readable Stream vs Writeable Stream


 */