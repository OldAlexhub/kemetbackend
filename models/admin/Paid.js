import mongoose from "mongoose";

const PaidSchema = new mongoose.Schema({
  datePaid: { type: Date, default: new Date() },
  driverId: String,
  totalFare: Number,
});
const PaidModel = mongoose.model("paid", PaidSchema);

export default PaidModel;
