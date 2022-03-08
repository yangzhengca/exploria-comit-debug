const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const app = express();
const port = 3000;
// const url = "mongodb://localhost:27017";

const mongoDB = "mongodb://127.0.0.1/exploria";

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;

app.set("view engine", "pug");

app.use(express.static('public'));

/* MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB server");
}); */
/* 
app.get("/", (req, res) => {
    res.render("index", {});
}); 
*/

// Routers
const home = require('./src/home.js');
const properties = require('./src/properties.js');

app.use('/', home);
app.use('/properties', properties);
app.get("/about", (req, res) => {
    res.render("static/about", {});
});
app.get("/contact", (req, res) => {
    res.render("static/contact", {});
});


app.get('/error', function (req, res) {
    res.status(500).send('Server error');
});

// FOR 404 - Broken URLs
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);
    }
    console.log(`Server running on port ${port}`);
});