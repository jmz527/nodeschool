var fs = require('fs');

// console.log(process.argv[2]);
fs.readFile(process.argv[2], function(err, data) {
	var str = data.toString();
	var arr = str.split('\n');
	console.log(arr.length - 1);
});