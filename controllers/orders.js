const express = require("express");
const orderRouter = express.Router();
const Order = require("../models/order");

// orderRouter.get("/", (req, res) => {
//   res.send("hello");
// });

// Index
orderRouter.get("/", (req, res) => {
  Order.find({}, (err, foundOrders) => {
    res.render("/order/index", {
      order: foundOrders,
    });
  });
});
// New
orderRouter.get("/new", (req, res) => {
  res.render("order/new.ejs");
});
// Delete
// Update
// Create
orderRouter.post("/", (req, res) => {
  Order.create(req.body, (err, createdOrder) => {
    res.redirect("/order");
  });
});
// Edit
// Show

module.exports = orderRouter;
