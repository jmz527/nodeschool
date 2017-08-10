function attachTitle(name) {
  return 'DR. '+name;
}

let pOne = new Promise(function(resolve) {
  resolve('MANHATTAN');
});

pOne.then(attachTitle).then(console.log);
