const express = require("express");
const router = require("./router");
const path = require("path");

const app = express();

//only put EJS files inside the views folder not js 
app.set("view engine", "ejs");
// path.join((__dirname), "partials");
// app.set("views", path.join(__dirname, "Views"));

const staticPath = path.join((__dirname));
//path.join(__dirname, "Partials");
console.log(staticPath);
app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

app.use(router)

app.listen(5000, () => {
  console.log("Running app on Port 5000 ");
});
