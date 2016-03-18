var fs = require('fs');
var path = require('path');
var arr = [];


// console.log(process.argv[2]);
fs.readdir(process.argv[2], function(err, list) {
	// console.log(process.argv[3]);
	// console.log(list);

	list.forEach(function(l) {
		// console.log(path.extname(l));
		if (path.extname(l) === ('.' + process.argv[3])) {
			// console.log(path.extname(l));

			console.log(l);
		}
	});
});








// OFFICIAL SOLUTION:
// var fs = require('fs')  
// var path = require('path')  

// fs.readdir(process.argv[2], function (err, list) {  
// 	list.forEach(function (file) {  
// 		if (path.extname(file) === '.' + process.argv[3])
// 		console.log(file)
// 	})
// })