import mongoose from "mongoose";

const PayDriversSchema = new mongoose.Schema({
  bookingId: String,
  driverId: String,
  fare: Number,
});
const PayDriverModel = mongoose.model("sent_pay", PayDriversSchema);

export default PayDriverModel;
