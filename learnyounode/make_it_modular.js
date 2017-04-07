var my_module = require('./my_module');

// my_module("one", "two", function() {
// 	console.log("three");
// });

my_module(process.argv[2], process.argv[3], function(err, files) {
	if (err) {
    // console.log('error')

		console.log(err)
	} else {

    // console.log('success')

    files.forEach(function(file) {
      console.log(file);
    });

	}
});





// Official Solution:

    // var filterFn = require('./solution_filter.js')
    // var dir = process.argv[2]
    // var filterStr = process.argv[3]

    // filterFn(dir, filterStr, function (err, list) {
    //   if (err) {
    //     return console.error('There was an error:', err)
    //   }

    //   list.forEach(function (file) {
    //     console.log(file)
    //   })
    // })
