import PayDriverModel from "../../models/admin/PayDrivers.js";

const SendPayment = async (req, res) => {
  try {
    const { bookingId, driverId, fare } = req.body;

    // Check if a payment with the same bookingId already exists
    const existingPayment = await PayDriverModel.findOne({ bookingId });

    // If a payment already exists, return a 400 error
    if (existingPayment) {
      return res.status(400).json({ message: "Payment Already Submitted" });
    }

    // If no existing payment is found, create a new payment record
    const newPayment = new PayDriverModel({
      bookingId,
      driverId,
      fare,
    });

    await newPayment.save(); // Save the new payment record to the database
    res.status(201).json({ message: "Payment Submitted", newPayment });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server Error!" });
  }
};

export default SendPayment;
