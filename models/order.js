const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
    {clothing: String},
    {qty: Number},
    {price: Number},
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;