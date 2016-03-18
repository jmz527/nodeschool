var fs = require('fs');

// console.log(process.argv[2]);
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var arr = str.split('\n');
console.log(arr.length - 1);

// for (var i = 0; i < arr.length - 1; i++) {
// 	console.log(arr[i]);
// };

// arr.forEach(function(l) {
// 	console.log(l);
// })
// console.log(arr);




// OFFICIAL SOLUTION:
// var fs = require('fs')  

// var contents = fs.readFileSync(process.argv[2])  
// var lines = contents.toString().split('\n').length - 1  
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
//  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1  