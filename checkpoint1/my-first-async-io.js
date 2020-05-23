const fs = require("fs");
fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  x = data.toString().split("\n").length;
  console.log(x - 1);
});
