var http = require('http');

function httpGet(url) {
	http.get(url, function(res) {
		// console.log("Got response: " + res.statusCode);

		res.setEncoding('utf8');

		res.on("data", function(data) {
			console.log(data);
		});

	}).on('error', function(e) {
		// console.log("Got error: " + e.message);
	});
}

httpGet(process.argv[2]);





// OFFICIAL SOLUTION:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)


