// Given an Array of strings, use Array#reduce to create an object that contains the number of times
// each string occured in the array. Return the object directly (no need to console.log).

 // Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

    // console.log(countWords(inputWords));

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }



// MY ANSWER
//_______________________________________//
function countWords(arr) {
	arr = arr.map(function(word) {
		var Obj = {};
			Obj[word] = 1;

		return Obj;
	}).reduce(function(prev, cur) {
		var prevKeys = Object.keys(prev);
		var curKey = Object.keys(cur);
		var Bool = prevKeys.some(function(key) {
			return (key==curKey[0]);
		});

		if (Bool) {
			prev[curKey] += 1;
		} else {
			prev[curKey] = 1;
		}

		return prev;
	});






	// arr = arr.reduce(function(prev, cur, idx, arr) {
	// 	// if (idx == 0) {
	// 	// 	arr[0] = {curWord: 1};
	// 	// } else if (arr[0][curWord] && prevWord==curWord) {
	// 	// 	arr[0][curWord] += 1;
	// 	// } else {
	// 	// 	arr[0][curWord] = 1;
	// 	// }
	// });

	// var Obj = {};

	// arr.map(function(word, idx, arr) {
	// 	if (Obj[word]) {
	// 		Obj[word] += 1;
	// 	} else {
	// 		Obj[word] = 1;
	// 	}

	// });

	return arr
}

module.exports = countWords;

// module.exports = function checkWordCount(input) {
// 	return countWords(input);
// };


// OFFICIAL ANSWER
//_______________________________________//

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
