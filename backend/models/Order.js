const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pizza: {
      base: String,
      sauce: String,
      cheese: String,
      veggies: [String],
      meat: [String],
    },
    price: { type: Number, required: true },
    paymentId: String,
    orderStatus: {
      type: String,
      enum: ['Received', 'In Kitchen', 'Sent to Delivery', 'Delivered'],
      default: 'Received',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
