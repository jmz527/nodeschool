function attatchTitle(name) {
  return 'DR. '+name;
}

let pOne = new Promise(function(resolve) {
  resolve('MANHATTAN');
});

// let pTwo = new Promise(function(resolve) {
//   resolve();
// });


pOne.then(attatchTitle).then(console.log);
