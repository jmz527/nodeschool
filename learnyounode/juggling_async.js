var http = require('http')

var result = new Array(3);


// console.log(process.argv[2], process.argv[3], process.argv[4])

function onData() {
  // console.log(`DATA RETREIVED!`);
}

function onError() {
  // console.log(`SOMETHING FUCKED UP!`);
}


function fetchAsync(url, timeout, onData, onError) {
  let data = "";

  http.get(url, function (res) {
    res.setEncoding('utf8')
    res.on('data', function(packet) {
      data = data.concat(packet);
    })
    res.on('error', console.error)
    res.on('end', function() {
      // console.log(data);
      onData(data);
    });

  })

}

let fetchPromise = (url, timeout) => {
  return new Promise((resolve, reject) => {
    fetchAsync(url, timeout, resolve, reject);
  })
}


function httpGet(...args) {
  // console.log(args);

  Promise.all([
    fetchPromise(args[0], null, onData, onError),
    fetchPromise(args[1], null, onData, onError),
    fetchPromise(args[2], null, onData, onError)
  ]).then((data) => {

    // console.log(data);
    data.forEach(function(txt) {
      console.log(txt)
    });


  }, (err) => {
    console.log(`error: ${err}`);
  })

}

httpGet(process.argv[2], process.argv[3], process.argv[4]);







// Official Solution:
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
