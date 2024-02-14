import mongoose from "mongoose";

const ReturnBookingSchema = new mongoose.Schema({
  bookingId: { type: Number, unique: true },
  userId: String,
  name: String,
  returnCity: { type: String, enum: ["cairo", "alexandria"] }, // Make sure to fill in the enum options
  returnPickupAddress: { type: String },
  returnDate: Date,
  returnTime: String,
  returndropOffCity: {
    type: String,
    enum: ["cairo", "alexandria", "cai", "hbe"],
  },
  returnDropoff: String,
  fare: Number,
});

ReturnBookingSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastBooking = await ReturnModel.findOne().sort({ bookingId: -1 });
    let nextId = lastBooking ? lastBooking.bookingId + 1 : 1000001;
    let uniqueIdFound = false;

    // Loop until a unique bookingId is found
    while (!uniqueIdFound) {
      const existingBooking = await ReturnModel.findOne({ bookingId: nextId });
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

const ReturnModel = mongoose.model("returnBooking", ReturnBookingSchema);

export default ReturnModel;
