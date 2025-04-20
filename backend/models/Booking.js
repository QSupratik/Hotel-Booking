const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  checkInDate: Date,
  checkOutDate: Date,
  guests: {
    adults: Number,
    children: Number,
    infants: Number,
    pets: Number
  },
  totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
