// // Suppose we have a method:

// var update = function(name, age, tShirtSize) {
//   this.name = name;
//   this.age = age;
//   this.tShirtSize = tShirtSize;
// };

// // and a person object:

// var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

// // You need to provide the implementation for the method:

// var caller = function (person, update, name,   age, tShirtSize) {
//   return update.call(person, name, age, tShirtSize);
// };

// console.log(person) // => person.name = Sharma, person.age = 29 and person.tShirtSize = XL


var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    return method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier: function (object, method, argumentsArr) {
    return method.apply(object, argumentsArr);
  }
};
module.exports = callAndApply;