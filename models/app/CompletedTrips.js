import mongoose from "mongoose";

const CompletedSchema = new mongoose.Schema({
  dateComplete: { type: Date, default: new Date() },
  bookingId: String,
  driverId: String,
  name: String,
  tripDate: Date,
  from: String,
  to: String,
  fare: Number,
});
const CompletedModel = mongoose.model("completed", CompletedSchema);

export default CompletedModel;
