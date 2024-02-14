import mongoose from "mongoose";

const AcceptedReturnSchema = new mongoose.Schema({
  bookingId: String,
  driverId: String,
  name: String,
  from: String,
  fromTime: String,
  fromDate: Date,
  toAddress: String,
  fare: Number,
});
const AcceptedReturnModel = mongoose.model(
  "accepted_returns",
  AcceptedReturnSchema
);

export default AcceptedReturnModel;
