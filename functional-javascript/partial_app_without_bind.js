// Use partial application to create a function that fixes the first argument to console.log.
// i.e. Implement a logging function that prepends a namespace string to its output.


// var info = logger('INFO:')
// info('this is an info message')
// INFO: this is an info message

// var warn = logger('WARN:')
// warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info


// var slice = Array.prototype.slice


// MY ANSWER
//_______________________________________//
function logger(namespace, ...args) {
  // SOLUTION GOES HERE

  function log(...args) {
  	var args = Array.prototype.slice.call(arguments).join(' ');

  	return console.log(namespace+" "+args);
  }

  return log
}

module.exports = logger


// OFFICIAL ANSWER
//_______________________________________//
var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
    console.log.apply(console, [namespace].concat(slice.call(arguments)))
  }
}

module.exports = logger
