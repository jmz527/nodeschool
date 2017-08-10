// 'use strict';

// // Would have been nice to know what chunks of the code were provided

// function first(secret_value) {
//   return new Promise(function(resolve) {
//     resolve(secret_value);
//   });
// }

// function second(value) {
//   console.log(value);

//   return new Promise(function(resolve) {
//     resolve(value);
//   });
// }

// function onFullfilled(p) {
//   return p;
// }

// first().then(second).then(onFullfilled).then(console.log);




// Official Solution:
'use strict';

/* global first, second */

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above, ou could also do this:
// first().then(second).then(console.log);
