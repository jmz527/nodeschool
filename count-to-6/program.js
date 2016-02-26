module.exports = function average(...args) {
	var result = 0, l = args.length;
	args.forEach(function(value) {
		result += value;
	});
	result = (result/l);
	return result
};


// var inputs = process.argv.slice(2);
// // console.log(inputs);
// // console.log(inputs.concat());
// // console.log(inputs.map(str => str.charAt(0)));
// // console.log(inputs.map(str => str.charAt(0)).reduce((arry, str) => arry.concat(str)));

// var result = inputs.map(str => str[0]).reduce((arry, str) => arry + str);
// console.log(`[${inputs}] becomes "${result}"`);



// var foot = {
// 	kick: function () {
// 		this.yelp = "Ouch!";
// 		setImmediate(() => {
// 			console.log(this.yelp);
// 		});
// 	}
// };
// foot.kick();


// var args = process.argv;
// // console.log(args);
// // console.log(args.splice(2, (args.length - 2)))
// var numbers = args.splice(2, (args.length - 2));

// // var numbers = [1, 1, 2, 3, 5, 8];
// var min = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${min}`);