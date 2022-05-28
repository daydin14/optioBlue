const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerSchema = new Schema(
    {firstName: String},
    {lastName: String},
    {phoneNumber: number},
    {email: String}
);
const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;