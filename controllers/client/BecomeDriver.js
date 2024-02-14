import BecomeDriverModel from "../../models/client/BecomeDriver.js";

const BecomeDriver = async (req, res) => {
  try {
    const {
      fname,
      lname,
      phoneNumber,
      email,
      driverLicenseNumber,
      driverLicenseExpiry,
      make,
      model,
      year,
      plateNumber,
    } = req.body;

    const newApplicant = await BecomeDriverModel({
      fname,
      lname,
      phoneNumber,
      email,
      driverLicenseNumber,
      driverLicenseExpiry,
      make,
      model,
      year,
      plateNumber,
    });
    await newApplicant.save();
    res.status(201).json({ message: `Submitted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default BecomeDriver;
