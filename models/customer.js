const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema(
    {firstName: String},
    {lastName: String},
    {phoneNumber: Number},
    {email: String},
    {isCustomer: false},
    {orders: Object}
);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;