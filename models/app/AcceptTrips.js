import mongoose from "mongoose";

const AcceptTripsSchema = new mongoose.Schema({
  date: { type: Date, default: new Date() },
  bookingId: String,
  driverId: String,
  name: String,
  from: String,
  fromTime: String,
  fromDate: Date,
  toAddress: String,
  fare: Number,
});
const AcceptedTripsModel = mongoose.model("accepted_trips", AcceptTripsSchema);

export default AcceptedTripsModel;
