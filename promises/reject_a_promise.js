'use strict';

// Create a promise
var promise = new Promise(function (fulfill, reject) {
  // After the timeout reaches 300ms, fulfill the promise with value
  // 'FULFILLED!'.

  setTimeout(function () {
    let error = Error('REJECTED!');

      reject(error);
    // fulfill('FULFILLED!');
  }, 300);

});

function onReject(error) {
  console.log(error.message);
}

// Add a handler to the promise’s fulfillment. `console.log` will be called
// with the value passed to `fulfill`, which is `'FULFILLED!'`.
// Note that this statement will ALWAYS be executed before `fulfill` is
// called (we'll talk about this in depth in the lessons to come).

promise.then(console.log, onReject);
