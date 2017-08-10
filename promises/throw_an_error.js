'use strict'

function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised(process.argv[2])
.then(null, console.log)


// function parsePromised() {
// 	return new Promise((res, rej) => {

// 		try {
// 			JSON.parse(process.argv[2])
// 		} catch (e) { // console.log(e)
// 			rej(e)
// 		}

// 	})
// }

// parsePromised().then().catch(console.log);