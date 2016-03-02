var inputs = process.argv.slice(2);
// console.log(inputs);
// console.log(inputs.concat());
// console.log(inputs.map(str => str.charAt(0)));
// console.log(inputs.map(str => str.charAt(0)).reduce((arry, str) => arry.concat(str)));

var result = inputs.map(str => str[0]).reduce((arry, str) => arry + str);
console.log(`[${inputs}] becomes "${result}"`);