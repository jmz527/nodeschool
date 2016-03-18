// console.log(process.argv);
var arr = process.argv.slice(2), sum = 0;
// console.log(arr);

arr.forEach(function(i) {
	// console.log(i);
	sum += Number(i);
});
console.log(sum);