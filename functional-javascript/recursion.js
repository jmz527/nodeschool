// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr
}, 0)
// => 6




// MY ANSWER
//_______________________________________//
function reduce(arr, fn, init) {
	return arr.reduce(fn, init);
}

module.exports = reduce;


// OFFICIAL ANSWER
//_______________________________________//
function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}