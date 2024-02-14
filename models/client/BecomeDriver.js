import mongoose from "mongoose";

const BecomeDriverSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  phoneNumber: Number,
  email: String,
  driverLicenseNumber: Number,
  driverLicenseExpiry: Date,
  make: String,
  model: String,
  year: String,
  plateNumber: String,
});
const BecomeDriverModel = mongoose.model("becomeDriver", BecomeDriverSchema);

export default BecomeDriverModel;
