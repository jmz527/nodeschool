function doubleAll(numbers) {
	var result= []
	// for (var i = 0; i < numbers.length; i++) {
	// 	result.push(numbers[i] * 2)
	// }

	result = numbers.map(doubleOne);
	return result
}

function doubleOne(num) {
	return num * 2
}

module.exports = doubleAll