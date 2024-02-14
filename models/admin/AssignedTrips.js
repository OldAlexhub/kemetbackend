import mongoose from "mongoose";

const AssignedSchema = new mongoose.Schema({
  bookingId: { type: Number },
  driverId: { type: String },
  name: String,
  arrivalDate: Date,
  pickupAddress: { type: String },
  pickupDate: { type: Date },
  pickupTime: { type: String },
  passCount: { type: Number },
  destination: { type: String },
  dropoffAddress: { type: String },
  phoneNumber: { type: Number },
  email: { type: String },
  fare: { type: Number },
});

const AssignedModel = mongoose.model("assigned_booking", AssignedSchema);

export default AssignedModel;
