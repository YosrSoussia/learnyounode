const path = require("path");
var mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], function (err, list) {
  if (err) return err;
  list.forEach(function (file) {
    console.log(file);
  });
});