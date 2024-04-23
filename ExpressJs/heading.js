const express = require("express");
const app = express();

app.get("/services", (req, res) => {
  res.send("<h2>This is heading</h2>");
});
