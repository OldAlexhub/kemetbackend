import PayDriverModel from "../../models/admin/PayDrivers.js";

const DeletePayments = async (req, res) => {
  const { driverId } = req.params;
  // console.log(driverId);
  if (!driverId) {
    return res.status(400).json({ message: "No Driver ID" });
  }
  try {
    const deletePay = await PayDriverModel.findOneAndDelete({
      driverId: driverId,
    });
    if (!deletePay) {
      return res.status(404).json({ message: "Payment not found." });
    }
    res.status(200).json({ message: `Pay Deleted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default DeletePayments;
