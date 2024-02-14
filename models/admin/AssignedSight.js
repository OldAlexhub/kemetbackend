import mongoose from "mongoose";

const SightseeingSchema = new mongoose.Schema({
  bookingId: { type: Number, unique: true },
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
  driverId: String,
});
const SightModel = mongoose.model("assigned_sight", SightseeingSchema);

export default SightModel;
