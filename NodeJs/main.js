// console.log("Shubham");
// const sub = require("./modules/sub");
// console.log(sub(33, 44));
// console.log("techllive");

//1
const fs = require("fs");
// console.log(fs);

fs.mkdirSync("techlive");
fs.writeFileSync("techlive/data.txt", "node js file modules ");
//created new folder techlive and made file data.txt

fs.appendFileSync("techlive/data.txt", "appending new data");
