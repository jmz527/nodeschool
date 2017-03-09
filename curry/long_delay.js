var delay = function(a) {
	return function closure(b) {
		if (b) {
			a += b
			return closure;
		} else {
			return a;
		}
	}
};
module.exports = delay;



// OFFICIAL SOLUTION:
// var total = 0;
// var delayInvoc = function (a) {
//   if (a === undefined) {
//     var result = total;
//     total = null;
//     return result;
//   } else {
//     total = total + a;
//     return delayInvoc;
//   }
// };

// module.exports = delayInvoc;