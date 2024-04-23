const path = require("path");
//console.log(path);

// console.log(path.dirname("Nodejs/path"));
// console.log(path.extname("Nodejs/path/path.js"));
// console.log(path.basename("node/path/"));

const myPath = path.parse("nodejs/techlive/index.html");
console.log(myPath.name);
console.log(myPath.ext);
console.log(__filename);
console.log(__dirname);
