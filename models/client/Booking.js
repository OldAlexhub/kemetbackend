import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  bookingId: { type: Number, unique: true },
  userId: { type: String },
  name: String,
  airlines: String,
  flightNumber: String,
  arrivalDate: Date,
  pickupAddress: { type: String, enum: ["cairo", "alexandria", "cai", "hbe"] },
  pickupDate: { type: Date },
  pickupTime: { type: String },
  passCount: { type: Number, default: 1 },
  destination: {
    type: String,
    enum: ["cairo", "alexandria", "cai", "hbe"],
  },
  dropoffAddress: { type: String },
  phoneNumber: { type: Number },
  email: { type: String },
  fare: { type: Number },
});

BookingSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastBooking = await BookingModel.findOne().sort({ bookingId: -1 });
    let nextId = lastBooking ? lastBooking.bookingId + 1 : 1001;
    let uniqueIdFound = false;

    // Loop until a unique bookingId is found
    while (!uniqueIdFound) {
      const existingBooking = await BookingModel.findOne({ bookingId: nextId });
      if (!existingBooking) {
        uniqueIdFound = true;
      } else {
        nextId++;
      }
    }

    this.bookingId = nextId;
  }
  next();
});

const BookingModel = mongoose.model("booking", BookingSchema);

export default BookingModel;
