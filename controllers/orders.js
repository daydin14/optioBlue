const express = require("express");
const orderRouter = express.Router();
const Order = require("../models/order");

// orderRouter.get("/", (req, res) => {
//   res.send("hello");
// });

// Index
orderRouter.get("/", (req, res) => {
  Order.find({}, (err, foundOrders) => {
    res.render("../views/order/index.ejs", {
      order: foundOrders,
    });
  });
});
// New
orderRouter.get("/new", (req, res) => {
  res.render("../views/order/new.ejs");
});
// Delete
orderRouter.delete("/:id", (req, res) => {
  Order.findByIdAndDelete(req.params.id, () => {
    res.redirect("/order");
  });
});
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
orderRouter.get("/:id/edit", (req, res) => {
  Order.findById(req.params.id, (err, foundOrder) => {
    res.redirect("/order");
  });
});
// Show
orderRouter.get("/:id", (req, res) => {
  Order.findById(req.params.id, (err, foundOrders) => {
    res.render("../views/order/show.ejs", {
      order: foundOrders,
    });
  });
});

module.exports = orderRouter;
