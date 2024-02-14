import mongoose from "mongoose";

const AssignedReturnsSchema = new mongoose.Schema({
  bookingId: String,
  driverId: String,
  name: String,
  returnCity: String,
  returnPickupAddress: String,
  returnDate: Date,
  returnTime: String,
  returnDropOffCity: String,
  returnDropoff: String,
  fare: Number,
});
const AssignedReturnsModel = mongoose.model("returns", AssignedReturnsSchema);

export default AssignedReturnsModel;
