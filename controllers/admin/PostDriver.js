import DriverModel from "../../models/admin/Drivers.js";

const PostDriver = async (req, res) => {
  try {
    const { fname, lname, email, make, model, year, phoneNumber } = req.body;

    const driver = await DriverModel.findOne({ email });
    if (driver) {
      return res.status(400).json({ message: `Driver already exists!` });
    }
    const newDriver = await DriverModel({
      fname,
      lname,
      email,
      make,
      model,
      year,
      phoneNumber,
    });
    await newDriver.save();
    res.status(201).json({ message: `Driver Added!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostDriver;
