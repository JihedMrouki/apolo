const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  total: {
    type: Number,
    default : 1,
  },
  state: {
    type: String,
  },
});
const Order = mongoose.model('Order',OrderSchema)
module.exports = Order;