const express = require("express");
const orderRouter = express.Router();
const Order = require("../models/order");

orderRouter.get("/", (req, res) => {
  res.send("hello");
});
module.exports = orderRouter;
