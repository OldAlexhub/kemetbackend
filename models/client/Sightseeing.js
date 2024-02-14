import mongoose from "mongoose";

const SightseeingSchema = new mongoose.Schema({
  bookingId: { type: Number, unique: true },
  tag: { type: String, default: "Sightseeing" },
  userId: String,
  name: String,
  pickupAddress: String,
  date: Date,
  time: String,
  duration: String,
  dropoffAddress: String,
  email: String,
  phoneNumber: String,
  fare: Number,
  special: String,
});

SightseeingSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastRecord = await SightseeModel.findOne().sort({ bookingId: -1 });
    if (lastRecord) {
      this.bookingId = lastRecord.bookingId + 1;
    } else {
      this.bookingId = 50001; // Start from 50001 if no record exists
    }
  }
  next();
});

const SightseeModel = mongoose.model("sightseeing", SightseeingSchema);

export default SightseeModel;
