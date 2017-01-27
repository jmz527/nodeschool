var http = require('http')

http.get(process.argv[2], function (res) {
	var chars = 0, all = "";

	res.setEncoding('utf8')
	res.on('data', function(packet) {
		chars += packet.length;
		all = all.concat(packet);
	})
	res.on('error', console.error)
	res.on('end', function() {
		console.log(chars);
		console.log(all);
	});

}).on('error', console.error)



// OFFICIAL SOLUTION:
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })