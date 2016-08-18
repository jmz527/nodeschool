// Write a function duckCount that returns the number of arguments passed to it
// which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

var duck = {
  quack: function() {
    console.log('quack')
  }
}

duck.hasOwnProperty('quack') // => true


var notDuck = Object.create({quack: true})
var duck = {quack: true}
duckCount(duck, notDuck) // 1


// MY ANSWER
//_______________________________________//

function duckCount(...args) {
	var count = 0, args = Array.prototype.slice.call(arguments);

	args.map(function(arg) {
		count += (Object.hasOwnProperty.call(arg, 'quack'))?1:0;
	});

	return count
}

module.exports = duckCount

// OFFICIAL ANSWER
//_______________________________________//
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount


