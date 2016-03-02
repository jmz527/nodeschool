function repeat(operation, num) {
	// while (num > 0) {
	// 	num--;
	// 	operation();
	// }

	if (num <= 0) return
	operation()
	return repeat(operation, --num)
}

module.exports = repeat