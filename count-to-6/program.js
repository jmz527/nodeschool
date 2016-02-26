module.exports = function average(...args) {
	var result = 0, l = args.length;
	args.forEach(function(value) {
		result += value;
	});
	result = (result/l);
	return result
};