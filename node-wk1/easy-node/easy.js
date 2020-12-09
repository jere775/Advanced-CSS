//exercise 1(hello world)
// console.log("HELLO WORLD"); 

// exercise 2(baby steps)
// let result = 0;
// for (i = 2; i < process.argv.length; i++){
//     result += Number(process.argv[i]);

// }
// console.log(result);

//exercise 3(my fisrt i/o)
// const fs = require('fs');
// const filename = process.argv[2];

// file = fs.readFileSync(filename);
// contents = file.toString();
// console.log(contents.split('\n').length - 1);

//exercise 4(my fisrt async i/o)
// const fs = require('fs');
// const file = process.argv[2];

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err);
// }
//   const lines = contents.toString().split('\n').length - 1
  
//   console.log(lines);
// });

//exercise 5(filtered LS)
// const fs = require('fs');
// const path = require('path');

// const file1 = process.argv[2];
// const ext = '.' + process.argv[3];

// fs.readdir(file1, function (err, files) {
//   if (err) return console.error(err);
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   });
// });




