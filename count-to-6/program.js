module.exports = function average(...args) {
	var result = 0, l = args.length;
	args.forEach(function(value) {
		result += value;
	});
	result = (result/l);
	return result
};


// var args = process.argv;
// // console.log(args);
// // console.log(args.splice(2, (args.length - 2)))
// var numbers = args.splice(2, (args.length - 2));

// // var numbers = [1, 1, 2, 3, 5, 8];
// var min = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${min}`);