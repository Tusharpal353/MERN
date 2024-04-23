const express = require("express")
const app = express()
const path = require("path")
const router = require("./router")
// console.log(path);

app.set('view engine', 'ejs');
const path1 = path.join((__dirname), "views")
// console.log(path1);
app.get("/", (req, res) => {
    res.render('navbar')

})


app.get('/home', (req, res) => {

    res.render("home")
})
app.get('/navbar', (req, res) => {

    res.render("navbar")
})

app.use(router)


// Serve static files from the  directory
// const csspath = path.join(__dirname, 'public')
// console.log(csspath);
// app.use(express.static(csspath));

// Serve static files from the 'public' directory
const publicPath = path.join(__dirname, 'public');
console.log(publicPath);
app.use(express.static(publicPath));


app.listen(5000, () => {
    console.log("ruuning on 5000");
})