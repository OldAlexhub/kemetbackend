import PaidModel from "../../models/admin/Paid.js";

const PostFinalPayment = async (req, res) => {
  try {
    const { driverId, totalFare } = req.body;

    const newPayment = await PaidModel({
      driverId,
      totalFare,
    });
    await newPayment.save();
    res.status(201).json({ message: `Payment Submitted!`, newPayment });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};
export default PostFinalPayment;
