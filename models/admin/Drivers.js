import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({
  driverId: { type: Number, unique: true },
  fname: String,
  lname: String,
  email: String,
  make: String,
  model: String,
  year: String,
  phoneNumber: String,
});

// Pre save middleware to auto-increment driverId
DriverSchema.pre("save", async function (next) {
  const document = this;

  try {
    const maxDriver = await DriverModel.findOne({}).sort("-driverId").exec();

    if (maxDriver) {
      document.driverId = maxDriver.driverId + 1;
    } else {
      // If there's no driver yet, start with 10001
      document.driverId = 10001;
    }
    next();
  } catch (err) {
    next(err);
  }
});

const DriverModel = mongoose.model("Driver", DriverSchema); // Changed 'drivers' to 'Driver' for convention

export default DriverModel;
