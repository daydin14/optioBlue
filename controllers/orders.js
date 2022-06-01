const express = require("express");
const orderRouter = express.Router();
const Order = require("../models/order");

// orderRouter.get("/", (req, res) => {
//   res.send("hello");
// });

// Index
orderRouter.get("/", (req, res) => {
  Order.find({}, (err, foundOrders) => {
    res.render("/order/index.ejs", {
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
orderRouter.put("/:id", (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/order");
  });
});
// Create
orderRouter.post("/", (req, res) => {
  Order.create(req.body, (err, createdOrder) => {
    res.redirect("/order");
  });
});
// Edit
// Show
orderRouter.get("/:id", (req, res) => {
  Order.findById(req.params.id, (err, foundOrders) => {
    res.render("order/show.ejs", {
      order: foundOrders,
    });
  });
});

module.exports = orderRouter;
