var curry = function(method) {
	var result, arity = method.length, argArr = [];

	return function closure(...args) {
		argArr = argArr.concat(...args)

		if (argArr.length < arity) {
			return closure;
		} else if (argArr.length == arity) {
			return method.apply(null, argArr);
		}
	}
};

module.exports = curry;




// OFFICIAL SOLUTION:
// function curry(fx) {
//   var arity = fx.length;
//   return function f1() {
//     var args = Array.prototype.slice.call(arguments, 0);
//     if (args.length >= arity) {
//       return fx.apply(null, args);
//     } else {
//       return function f2() {
//         var args2 = Array.prototype.slice.call(arguments, 0);
//         return f1.apply(null, args.concat(args2));
//       };
//     }
//   };
// }

// module.exports = curry;



// var abc = function(a,b,c) {
// 	return a+b+c;
// }

// var curriedFn = curry(abc);


// console.log(curriedFn(1)(2)(3))

// console.log(curriedFn(1,2)(3))

// console.log(curriedFn(1)(2,3))

// console.log(curriedFn(1,2,3))



