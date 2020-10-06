var fs = require("fs");
var my = require("./writer");

// fs.readFile('text.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
//     console.log("read async");
//  });

// var read = fs.readFileSync('text.txt');
// console.log(read.toString());

var resolveAfter2Seconds = function () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
        console.log('resolve');
      }, 2000);
    });
  }
  
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log('End');
    // expected output: "resolved"
  }
  
  asyncCall();
  