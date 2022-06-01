const express = require("express");
const orderRouter = express.Router();
const Order = require("../models/order");

// orderRouter.get("/", (req, res) => {
//   res.send("hello");
// });

// Create
orderRouter.post("/", (req,res) => {
  Order.create(req.body, (err, createdOrder) => {
    res.redirect("/order");
  });
});

// Index
orderRouter.get("/", (req,res) => {
  Order.find({}, (err, foundOrders) => {
    res.render("/order/index");
  });
});



module.exports = orderRouter;
