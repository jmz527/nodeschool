// var info = logger('INFO:')
// info('this is an info message')
// INFO: this is an info message

// var warn = logger('WARN:')
// warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info


// MY ANSWER
//_______________________________________//
module.exports = function(namespace) {
	function logger(...args) {
		var args = [namespace].concat(Array.prototype.slice.call(arguments)).join(' ');

		return console.log(args);
	}

	return logger.bind(namespace);
}



// OFFICIAL ANSWER
//_______________________________________//
module.exports = function(namespace) {
  return console.log.bind(console, namespace)
}

