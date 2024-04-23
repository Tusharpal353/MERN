const http = require("http");
console.log(http);

// const server = http.createServer((req, res) => {
//   res.end("hello students");
// });

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end("Welcome to the home page");
  }
  if (req.url == "/about") {
    res.end("Welcome to the About page");
  }
});
server.listen(5000, () => {
  console.log("server is running on port 5000");
});
