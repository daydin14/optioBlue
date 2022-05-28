const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
    {clothing: String},
    {qty: Number},
    {isCustomer: false},
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;