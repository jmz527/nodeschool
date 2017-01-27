var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExt, callback) {

	fs.readdir(dirName, function (err, list) {

		if (err) return callback(err);

		list.forEach(function (file) {  
			if (path.extname(file) === '.' + fileExt)
			// console.log(file)
			return callback(file);
		})
	})

	// console.log(dirName);
	// console.log(fileExt);
}