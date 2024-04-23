const { json } = require("node:stream/consumers");
const os = require("os");
//console.log(os);

//console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
//console.log(os.tmpdir());
//console.log(os.type());
//console.log(os.totalmem());
// console.log(os.freemem().toExponential());
// console.log(os.freemem().toLocaleString());

//API OPERATIONS
const fs = require("fs");
const jsonData = fs.readFileSync("apiData.json", "utf-8");

const jsuser = JSON.parse(jsonData);
// console.log(jsuser);

console.log(jsuser[3].id);
