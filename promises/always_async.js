'use strict';

// Create a promise
var promise = new Promise(function (fulfill, reject) {
  fulfill('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM')
