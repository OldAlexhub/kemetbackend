import mongoose from "mongoose";

const AcceptedSightSchema = new mongoose.Schema({
  bookingId: { type: Number, unique: true },
  driverId: String,
  name: String,
  from: String,
  date: Date,
  time: String,
  duration: String,
  to: String,
  fare: Number,
});
const AcceptedSightsModel = mongoose.model(
  "accepted_sights",
  AcceptedSightSchema
);

export default AcceptedSightsModel;
