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

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/services", (req, res) => {
  res.render("services.ejs");
});
app.get("/reviews", (req, res) => {
  res.render("reviews.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.listen(PORT);
