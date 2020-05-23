//const fs = require("fs");
//const path = require("path");
//const extension = ".${process.argv[3]}";
//fs.readdir(process.argv[2], function (err, list) {
//  console.log(list);
//});

//jebtou min github lel asaf ma fhemtouch el challenge hedha  :(
const fs = require("fs");
const path = require("path"); //why

const folder = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(folder, function (err, lists) {
  if (err) return console.error(err);
  lists.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
