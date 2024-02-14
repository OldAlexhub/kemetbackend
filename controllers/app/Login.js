import DriverModel from "../../models/admin/Drivers.js";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  try {
    const { driverId, phoneNumber } = req.body;

    // Updated to find a driver by both driverId and phoneNumber
    const driver = await DriverModel.findOne({ driverId, phoneNumber });

    if (!driver) {
      // If no driver is found with the given driverId and phoneNumber, return an error message
      return res
        .status(400)
        .json({ message: "Invalid driver ID or phone number." });
    }

    // Proceed to generate a token and respond with login details if the driver exists
    const token = jwt.sign({ userId: driver._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const name = driver.fname + " " + driver.lname;
    const userId = driver._id;
    const id = driver.driverId;

    res
      .status(200)
      .json({ message: "Login Successful", name, userId, token, id });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};

export default Login;
