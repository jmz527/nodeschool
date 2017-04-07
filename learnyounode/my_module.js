var fs = require('fs');
var path = require('path');
var str;

// function sortByExt(a, b) {
//   // str = path.extname(a) +"|"+path.extname(b);
//   // console.log(str);

//   if (path.extname(a) < path.extname(b)) {
//     // a is less than b by some ordering criterion
//     return -1;
//   } else if (path.extname(a) > path.extname(b)) {
//     // a is greater than b by some ordering criterion
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }


module.exports = function(dirName, fileExt, callback) {

	fs.readdir(dirName, function (err, list) {

		if (err) return callback(err, null);

    // list.sort(sortByExt);

    list = list.filter(function(file) {
      // console.log(path.extname(file));
      // console.log(fileExt);

      if (path.extname(file) === '.' + fileExt)
        return true;

      return false;
    });

    return callback(null, list);
	})

}





// Official Solution:

    // var fs = require('fs')
    // var path = require('path')

    // module.exports = function (dir, filterStr, callback) {
    //   fs.readdir(dir, function (err, list) {
    //     if (err) {
    //       return callback(err)
    //     }

    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })

    //     callback(null, list)
    //   })
    // }
