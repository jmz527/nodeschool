var delay = function(a) {
	return function(b) {
		return a + b
	}
};
module.exports = delay;