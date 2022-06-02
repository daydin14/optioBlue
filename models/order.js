const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
   clothing: String,
   qty: String,
   price: String,
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
