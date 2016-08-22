// var nums = [1,2,3,4,5]

// // `map` is your exported function
// var output = map(nums, function double(item) {
//   return item * 2
// })

// console.log(output) // => [2,4,6,8,10]


// MY ANSWER
//_______________________________________//
//  module.exports = function arrayMap(arr, fn) {
//  	var newArr;
// 	 	newArr = arr.map(fn);

// 	return newArr
// }


// OFFICIAL ANSWER
//_______________________________________//
module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}