require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const PORT = 3000;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongoDB not running?"));
db.on("connected", () => console.log("Mongo Connected"));
db.on("disconnected", () => console.log("Mongo Disconnected"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.listen(PORT);