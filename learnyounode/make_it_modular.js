var my_module = require('./my_module');

// my_module("one", "two", function() {
// 	console.log("three");
// });

my_module(process.argv[2], process.argv[3], function(err, arg) {
	if (err) {
		console.log(err)
	} else {
		console.log(arg);
	}
});