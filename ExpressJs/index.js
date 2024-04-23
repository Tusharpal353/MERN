const express = require("express");
const app = express();
const path = require("path");

//console.log(app);

//for sending HTML file to the express server
const router = require("./public/router");
//console.log(path);

// app.get("/", (req, res) => {
//   res.send("hello users");
// });

app.get("/about", (req, res) => {
  res.send("This is about page created with Express");
});

//sending HTMl
app.get("/services", (req, res) => {
  res.send("<h2>This is heading</h2>");
});

//converting OBJ to JSON
app.get("/user", (req, res) => {
  res.send({
    username: "Tushar",
    Location: "Earth",
  });
});

//Sending HTMl file

const staticPath = path.join(__dirname, "Public");
//console.log(staticPath);
app.use(express.static(staticPath));

// app.get("/file", (req, res) => {
//   //res.send("hello users");
//   res.sendFile(`${staticPath}/index.html`);
// });



//Mentioning where should we run our app
app.listen(5000, () => {
  console.log("Running app on Port 5000 ");
});
